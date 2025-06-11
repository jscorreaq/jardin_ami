export const linksNavegates = {
    "admin":[
        {
            "label": "Estudiantes",
            "icon": "fa-solid fa-users",
            "children": [
                {
                    "label": "Ver Estudiantes",
                    "path": "/dashboard/students"
                },
                {
                    "label": "Crear Estudiantes",
                    "path": "/dashboard/students/create"
                }
            ]
        },

        {
            "label": "Docentes",
            "icon": "fa-solid fa-person-chalkboard",
            "children": [
                {
                    "label": "Ver Docentes",
                    "path": "/dashboard/teachers"
                },
                {
                    "label": "Crear Docentes",
                    "path": "/dashboard/teachers/create"
                }
            ]
        },
        {
            "label": "users",
            "icon": "fa-solid fa-users",
            "children": [
                {
                    "label": "Ver Usuarios",
                    "path": "/dashboard/users"
                },
                {
                    "label": "Crear Usuarios",
                    "path": "/dashboard/users/create"
                }
            ]
        },
        {
            "label": "Reports",
            "icon": "fa-solid fa-chart-line",
            "children": [
                {
                    "label": "Ver Reportes",
                    "path": "/dashboard/reports"
                },
                {
                    "label": "Crear Reportes",
                    "path": "/dashboard/reports/create"
                }
            ]
        },
        {
                "label": "permissions",
                "icon": "fa-solid fa-table-cells-row-unlock",
                "children": [
                {
                    "label": "Ver Permisos",
                    "path": "/dashboard/permissions"
                },
                {
                    "label": "Crear Permisos",
                    "path": "/dashboard/permissions/create"
                }
            ]   
        }

    ],

    "seller":[
        {
            "label": "Estudiantes",
            "icon": "fa-solid fa-users",
            "children": [
                {
                    "label": "Ver Estudiantes",
                    "path": "/dashboard/students"
                },
                {
                    "label": "Crear Estudiantes",
                    "path": "/dashboard/students/create"
                }
            ]
        },
        {
            "label": "Reports",
            "icon": "fa-solid fa-chart-line",
            "children": [
                {
                    "label": "Ver Reportes",
                    "path": "/dashboard/reports"
                },
                {
                    "label": "Crear Reportes",
                    "path": "/dashboard/reports/create"
                }
            ]
        },
        {
            "label":"grades",
            "icon":"fa-solid fa-clipboard-list",
            "children": [
                {
                    "label": "Ver Notas",
                    "path": "/dashboard/grades"
                },
                {
                    "label": "Crear Notas",
                    "path": "/dashboard/grades/create"
                }
            ]
        }
    ],

    "customer":[
         {
            "label": "Reports",
            "icon": "fa-solid fa-chart-line",
            "path": "/dashboard/reports"
        }

    ],
    "all":[
        {
            "label":"profile",
            "icon":"fa-solid fa-user",
            "path": "/dashboard/profile"
        }
    ]
}