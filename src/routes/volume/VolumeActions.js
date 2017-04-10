import React, { PropTypes } from 'react'
import { Modal } from 'antd'
import { DropOption } from '../../components'
const confirm = Modal.confirm

function actions({ selected, showAttachHost, showRecurring, showSnapshots, detach, deleteVolume, showBackups }) {
  const handleMenuClick = (event, record) => {
    switch (event.key) {
      case 'attach':
        showAttachHost(record)
        break
      case 'delete':
        confirm({
          title: `Are you sure you want to delete volume ${record.name} ?`,
          onOk() {
            deleteVolume(record)
          },
        })
        break
      case 'detach':
        detach(record.actions.detach)
        break
      case 'backups':
        showBackups(record)
        break
      case 'recurring':
        showRecurring()
        break
      case 'snapshotList':
        showSnapshots()
        break
      default:
    }
  }

  const allActions = [
    { key: 'attach', name: 'Attach' },
    { key: 'detach', name: 'Detach' },
    { key: 'snapshotList', name: 'Snapshots' },
    { key: '6', name: 'Recurring Snapshot and Backup' },
  ]
  const availableActions = [{ key: 'backups', name: 'Backups' }, { key: 'delete', name: 'Delete' }]
  allActions.forEach(action => {
    for (const key of Object.keys(selected.actions)) {
      if (key === action.key) {
        availableActions.push(action)
      }
    }
  })
  return (
    <DropOption menuOptions={availableActions} onMenuClick={(e) => handleMenuClick(e, selected)}
    />
  )
}

actions.propTypes = {
  selected: PropTypes.object,
  detach: PropTypes.func,
  deleteVolume: PropTypes.func,
  showAttachHost: PropTypes.func,
  showRecurring: PropTypes.func,
  showSnapshots: PropTypes.func,
  showBackups: PropTypes.func,
}

export default actions