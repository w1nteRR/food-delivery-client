import React, { FC, useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

import { TabPanel } from '../../utils/Tab'
import { useRestaurant } from '../../../context/restaurant.context'
import { MenuList } from './Menu.list'

export const MenuNav: FC<{ sections: Array<string> }> = ({
    sections
}) => {
    
    const [value, setValue] = useState(0)
    const { menu } = useRestaurant()

    return (
        <Paper style={{boxShadow: 'none', margin: '60px 0 0'}}>
            <Tabs
                value={value}
                onChange={(_, value) => setValue(value)}
                indicatorColor='primary'
                textColor='inherit'
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                style={{
                    position: 'sticky',
                    top: 0,
                    background: '#fff',
                    zIndex: 1
                }}
            >
                {
                    sections.map(i => <Tab key={i} label={i} />)
                }
            </Tabs>
            {
                sections.map((_, index) => 
                    <TabPanel
                        value={value}
                        index={index}
                    >
                    {
                        value === 0
                        ?   <MenuList menu={menu} />
                        :   <MenuList menu={[menu[value]]} />
                    }
                    </TabPanel>
                )
            }
        </Paper>
    )
}