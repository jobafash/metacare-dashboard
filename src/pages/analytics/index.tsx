import React, { FC } from 'react';
import DashboardLayout from 'components/layout';
import Analytics from 'components/analytics';

const Dashboard : FC = ({
    ...props
}) => {
  return (
        <DashboardLayout>
            <Analytics/> 
        </DashboardLayout>
  )
}

export default Dashboard