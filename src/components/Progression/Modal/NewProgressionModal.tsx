import { Modal, Space } from 'antd';
import { QSTypography } from '../../Generals';
import './styles/NewProgressionModal.css'

type NewProgressionModalProps = {
  isModalOpen:boolean
  setModalOpen: (state: boolean) => void
}

export const NewProgressionModal = ({ isModalOpen, setModalOpen }: NewProgressionModalProps) => {
  return (
    <Modal
      className='progression-modal'
      title={<QSTypography.Title level={2} className='progression-modal-title'>Số thứ tự được cấp</QSTypography.Title>}
      centered
      open={isModalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={
        <Space direction='vertical' className='progression-modal-footer-space'>
          <QSTypography.Text className='progression-modal-footer-main-text'>Thời gian cấp: <span>09:30 11/10/2021</span></QSTypography.Text>
          <QSTypography.Text className='progression-modal-footer-main-text'>Hạn sử dụng: <span>17:30 11/10/2021</span></QSTypography.Text>
        </Space>
      }
    >
      <Space direction='vertical' className='progression-modal-body-space'>
        <QSTypography.Text className='progression-modal-body-main-text'>2001201</QSTypography.Text>
        <QSTypography.Text className='progression-modal-body-sub-text'>DV: Khám răng hàm mặt <strong>(tại quầy số 1)</strong></QSTypography.Text>
      </Space>
  </Modal>
  )
}