import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DeviceActionCreators, ServiceActionCreators, ProgressionActionCreators, ReportActionCreators, UserRoleActionCreators, UserActionCreators, UserActivityLogActionCreators } from '../state/action-creators';

/* Function: Read All Firebase Data If Any */
export const ReadAllFirebaseData = () => {
  const dispatch = useDispatch()
  const deviceActions = bindActionCreators(DeviceActionCreators, dispatch)
  const serviceActions = bindActionCreators(ServiceActionCreators, dispatch)
  const progressionActions = bindActionCreators(ProgressionActionCreators, dispatch)
  const reportActions = bindActionCreators(ReportActionCreators, dispatch)
  const roleActions = bindActionCreators(UserRoleActionCreators, dispatch)
  const accountActions = bindActionCreators(UserActionCreators, dispatch)
  const userActivityLogActions = bindActionCreators(UserActivityLogActionCreators, dispatch)

  useEffect(() => {
    // Async Method -> Concurrent Execution (Execution All The Actions At The Same Times - Not sequential execution)
    deviceActions.Read()
    serviceActions.Read()
    progressionActions.Read()
    reportActions.Read()
    roleActions.Read()
    accountActions.Read()
    userActivityLogActions.Read()

    return () => {
        
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}