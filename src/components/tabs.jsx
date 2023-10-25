import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import axios from 'axios';

export const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    const getTabs = async () => {
      try {
        const tabs = await axios.get('http://localhost:3030/tabs');
        setTabs(tabs.data);
      }
      catch (e) {
        console.error(e);
      }
    };
  
    getTabs()
  }, [])

  const sortedTabs = tabs.sort((a, b) => a.order - b.order)
  const tabValue = location.pathname.length > 1 ? location.pathname.slice(1) : location.pathname;
  const routeList = sortedTabs.map(item => item.id)

  useEffect(() => {
    if(sortedTabs[0] && sortedTabs[0].id) {
      if(location.pathname === '/' || !routeList.includes(tabValue)) {
        navigate(sortedTabs[0].id)
      }
    }
  }, [location.pathname, navigate, sortedTabs, routeList, tabValue])

  const handleChange = (_e, newValue) => {
    navigate(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="tabs">
            {sortedTabs.map(item => (
              <Tab component={Link} key={item.id} label={item.title} value={item.id} to={`/${item.id}`} />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
