import React from 'react'
import Table from './Table'
import { dummy_table3, dummy_table_mapping3 } from '../../dummy/data3'

function StatCard() {
  return (
    <div className='StatCard'>
      
      <Table data={dummy_table3} mapping={dummy_table_mapping3} colored={[1,4]} />
      <Table data={dummy_table3} mapping={dummy_table_mapping3} colored={[1,4]} />

   </div>

  )
}

export default StatCard