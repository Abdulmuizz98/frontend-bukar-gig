import React from 'react'
import Table from './Table'

import { dummy_table3, dummy_table_mapping3 } from '../../dummy/data3'

function StatCard() {
  return (
    <div className='StatCard'>
    
      <Table head1={"Payment Updates"} head2={"Today"} data={dummy_table3} mapping={dummy_table_mapping3} colored={[1,4]} />
      <Table head1={"Leave Requests"} head2={"Today"} data={dummy_table3} mapping={dummy_table_mapping3} colored={[1,4]} />

   </div>

  )
}

export default StatCard