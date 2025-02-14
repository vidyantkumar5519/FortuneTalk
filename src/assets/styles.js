export const Colors = {
    primaryDark: "#F16134",
    primaryLight: "#F48534",
    white: "#fff",
    whiteDark: "#F5F5F5",
    grayLight: "#ECEAEA",
    gray: "#A3A3A3",
    grayDark: "#666666",
    black: "#090A0A",
    greenLight: "#46BC67",
    greenDark: "#34A853",
    greenDark2: "#0A882D",
    green_parrot: "#5DC709",
    red: "#FF0000",
    red_a: "#eb2f06",
    blueFacebook: "#1877F2",
    skyblue: "#46A6FF",
    bodyColor: "#EDF2F5",
    splash_background: "#FFEDCA",
    light_Pink: "#f7e7d7",
    dark_Pink: "#EFD0B0",
    darkBlue: "#1B1B45",
};

export const useStyles = () => ({
    loginBox: `
        p-8
        max-w-md
        rounded-lg
        bg-white
    `,
    loginheadingContainer: `
        flex
        items-center
        justify-center
        flex-col
    `,
    login: `
        text-lg
        mt-5
    `,
    loginheading: `
        text-2xl
        font-philosopher
    `,
    container: `
        flex
        items-center
        justify-center
        w-full
        p-5
        text-black
    `,
    box: `
        w-full
        p-4
        bg-white
        shadow-md
        rounded-lg
    `,
    headingContainer: `
        flex
        items-center
        justify-between
        self-center
    `,
    heading: `
        text-2xl
        font-philosopher
    `,
    addButton: `
        px-4
        py-2
        bg-primaryDark
        rounded-lg
        text-white
        flex
        items-center
        font-philosopher
        text-lg
        cursor-pointer
    `,
    addButtontext: `
        ml-2
    `,
    submitbutton: `
        bg-primaryLight
        w-full
        py-2
        rounded-lg
        text-white
        font-philosopher
        text-lg
        cursor-pointer
    `,
    denyButton: `
        bg-bodyColor
        w-full
        py-2
        rounded-lg
        text-black
        font-philosopher
        text-lg
        cursor-pointer
    `,
    closeButton: `
        text-primaryDark
        cursor-pointer
        p-2
        hover:bg-grayLight
        rounded-lg
    `,
    uploadContainer: `
        flex
        items-center
    `,
    uploadImageButton: `
        bg-dark_Pink
        w-full
        py-2
        rounded-lg
        text-black
        font-philosopher
        text-lg
        cursor-pointer
    `,
    errorstyles: `
        text-red-600
        text-sm
        font-arial
        leading-5
        mt-3
        mr-4
        ml-4
    `,
    chips: `
        m-4
    `,
    checkbox: `
        text-black
        text-lg
        font-philosopher
    `,
});

export const propStyles = {
    tableStyles: {
        sorting: false,
        search: true,
        searchFieldAlignment: "right",
        filtering: true,
        paging: true,
        pageSize: 5,
        paginationType: "stepped",
        showFirstLastPageButtons: true,
        paginationPosition: "bottom",
        exportButton: false,
        exportAllData: false,
        exportFileName: "Category data",
        addRowPosition: "first",
        actionsColumnIndex: -1,
        selection: false,
        showSelectAllCheckbox: false,
        headerStyle: { fontSize: "1.2rem", fontWeight: 600 },
        tableLayout: "auto",
    },
};
