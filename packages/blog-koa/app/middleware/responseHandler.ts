// enum statusCodes {
//   OK = 200,
//   ERROR = 500,
// }

// function handleRes(ctx: any) {
//   const withStatus =
//     (status: statusCodes) =>
//     (res: any = null) => {
//       ctx.body = { data: res };
//       ctx.status = 200;
//       ctx.type = "application/json";
//     };
//   ctx.response = Object.assign(ctx.response || {}, {
//     success: withStatus(statusCodes.OK),
//   });
// }

// import { KoaMiddlewareInterface, Middleware } from "routing-controllers";

// @Middleware({ type: "before" })
// export class responseHandler implements KoaMiddlewareInterface {
//   // interface implementation is optional

//   use(ctx: any, next: (err?: any) => Promise<any>): Promise<any> {
//     handleRes(ctx);
//     return next();
//   }
// }
