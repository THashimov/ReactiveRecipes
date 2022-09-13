const changeSidebarView = (prop) => {
    prop.isSidebarOpen ? prop.setSidebarState(false) : prop.setSidebarState(true);
};

export default changeSidebarView;