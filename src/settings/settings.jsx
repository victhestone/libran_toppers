import React, { useState, useEffect } from "react";
import { Box, Tab } from '@mui/material';
import { TabContext, TabList , TabPanel } from '@mui/lab';
import CardOverview from "../cards/card-overview";
import { AddCard } from "./add-card/add-card";

export function Settings() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(<TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All Cards" value="1" />
            <Tab label="Add Card" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><CardOverview isAllCardsOverview /></TabPanel>
        <TabPanel value="2"><AddCard/></TabPanel>
      </TabContext>)
}
