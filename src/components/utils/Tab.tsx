import React, { FC } from 'react'

interface TabPanelProps {
    value: number
    index: number
}

export const TabPanel: FC<TabPanelProps> = ({
    children,
    value,
    index
}) => 
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
    >
        {value === index && children}
    </div>