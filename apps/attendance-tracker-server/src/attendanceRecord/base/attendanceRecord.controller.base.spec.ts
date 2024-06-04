import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AttendanceRecordController } from "../attendanceRecord.controller";
import { AttendanceRecordService } from "../attendanceRecord.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  checkInTime: new Date(),
  checkOutTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  qrCode: "exampleQrCode",
  qrCodeExpiration: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  checkInTime: new Date(),
  checkOutTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  qrCode: "exampleQrCode",
  qrCodeExpiration: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    checkInTime: new Date(),
    checkOutTime: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    qrCode: "exampleQrCode",
    qrCodeExpiration: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  checkInTime: new Date(),
  checkOutTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  qrCode: "exampleQrCode",
  qrCodeExpiration: new Date(),
  updatedAt: new Date(),
};

const service = {
  createAttendanceRecord() {
    return CREATE_RESULT;
  },
  attendanceRecords: () => FIND_MANY_RESULT,
  attendanceRecord: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AttendanceRecord", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AttendanceRecordService,
          useValue: service,
        },
      ],
      controllers: [AttendanceRecordController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /attendanceRecords", async () => {
    await request(app.getHttpServer())
      .post("/attendanceRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkInTime: CREATE_RESULT.checkInTime.toISOString(),
        checkOutTime: CREATE_RESULT.checkOutTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        qrCodeExpiration: CREATE_RESULT.qrCodeExpiration.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /attendanceRecords", async () => {
    await request(app.getHttpServer())
      .get("/attendanceRecords")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          checkInTime: FIND_MANY_RESULT[0].checkInTime.toISOString(),
          checkOutTime: FIND_MANY_RESULT[0].checkOutTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          qrCodeExpiration: FIND_MANY_RESULT[0].qrCodeExpiration.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /attendanceRecords/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attendanceRecords"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /attendanceRecords/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/attendanceRecords"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        checkInTime: FIND_ONE_RESULT.checkInTime.toISOString(),
        checkOutTime: FIND_ONE_RESULT.checkOutTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        qrCodeExpiration: FIND_ONE_RESULT.qrCodeExpiration.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /attendanceRecords existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/attendanceRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkInTime: CREATE_RESULT.checkInTime.toISOString(),
        checkOutTime: CREATE_RESULT.checkOutTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        qrCodeExpiration: CREATE_RESULT.qrCodeExpiration.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/attendanceRecords")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
