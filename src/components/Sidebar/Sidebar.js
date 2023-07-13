import React from "react";
import { Drawer, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import  {BookmarkBorderOutlined, EmailOutlined, HomeOutlined, ListAltOutlined, MoreHorizOutlined, NotificationsNoneOutlined , PersonOutlineOutlined, SearchOutlined} from "@mui/icons-material"
import { useState } from "react";

const menuData = [ {
  name: "Home",
  icon: <HomeOutlined/>
},
{
  name: "Explore", icon: <SearchOutlined/>
},
{
  name: "Notifications", icon: <NotificationsNoneOutlined/>
},
{
  name: "Messages", icon: <EmailOutlined />
},
{
  name: "Bookmarks", icon: <BookmarkBorderOutlined/>
},
{
  name: "Lists", icon: <ListAltOutlined/>
},
{
  name: "Profile", icon: <PersonOutlineOutlined/>
},
{
  name: "More", icon: <MoreHorizOutlined/>
}
]

function Sidebar() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {menuData.map((item, index) => (
        <ListItem ListItemButton key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <div class="sidebar-container">
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <Drawer variant="temporary" open={open} anchor={"left"} onClose={() => setOpen(false)}>{getList()}</Drawer>
    </div>
  );
}

export default Sidebar;
