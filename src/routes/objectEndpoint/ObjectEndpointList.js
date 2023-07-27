import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { pagination } from '../../utils/page'
import ObjectEndpointActions from './ObjectEndpointActions'

function list({ loading, dataSource, rowSelection, height, deleteObjectEndpoint }) {
  const objectEndpointActionsProps = {
    deleteObjectEndpoint,
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => {
        return (
          <div>{record.name}</div>
        )
      },
    },
    {
      title: 'Endpoint',
      dataIndex: 'endpoint',
      key: 'endpoint',
      render: (text, record) => {
        return (
          <div>{record.endpoint}</div>
        )
      },
    },
    {
      title: 'Operation',
      key: 'operation',
      width: 120,
      render: (text, record) => {
        return (
          <ObjectEndpointActions {...objectEndpointActionsProps} selected={record} />
        )
      },
    },
  ]

  return (
    <div id="objectEndpointTable">
      <Table
        className="common-table-class"
        bordered={false}
        columns={columns}
        rowSelection={rowSelection}
        dataSource={dataSource}
        loading={loading}
        simple
        pagination={pagination}
        rowKey={record => record.id}
        scroll={{ x: 970, y: dataSource.length > 0 ? height : 1 }}
      />
    </div>
  )
}

list.propTypes = {
  loading: PropTypes.bool,
  dataSource: PropTypes.array,
  rowSelection: PropTypes.object,
  heigth: PropTypes.number,
  deleteObjectEndpoint: PropTypes.func,
}

export default list
