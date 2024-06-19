import {createReducer, on} from "@ngrx/store";
import {userEntity} from "../state/Entity/entity-state";
import {registration, registrationFail} from "../action/register.action";
import {registerOtpVerify, registerOtpVerifyFail} from "../action/registerotpverify.action";
import {authentication, authenticationFail, authenticationSuccess} from "../action/login.action";
import {forgetPasswordEmailSend, forgetPasswordEmailSendFail} from "../action/forgetpasswordemailsend.action";
import {forgetPasswordOtpVerify, forgetPasswordOtpVerifyFail} from "../action/forgetpasswordotpverify.action";
import {newPasswordChange, newPasswordChangeFail} from "../action/newpasswordchange.action";
import {updatedata, updatedataFail, updatedataSuccess} from "../action/update.action";
import {deleteUser, deleteUserFail, deleteUserSuccess} from "../action/delete.action";

const _reducer = createReducer(userEntity,

  on(registration,registerOtpVerify,authentication,
    forgetPasswordEmailSend,forgetPasswordOtpVerify,
    newPasswordChange,updatedata,
    deleteUser,(state, action) => {
    return {
      ...state,
      ...action
    }
  }),

  on(authenticationSuccess,updatedataSuccess,deleteUserSuccess, (state, action) => {
    return {
      ...state,
      ...action
    }
  }),

  on(registrationFail,registerOtpVerifyFail,authenticationFail,
    forgetPasswordEmailSendFail,forgetPasswordOtpVerifyFail,
    newPasswordChangeFail,updatedataFail,
    deleteUserFail,(state, errorMessage) => {
    return {
      ...state,
      ...errorMessage
    }
  })

);

export function reducer(state : any , action : any) {
  return _reducer(state,action);
}
