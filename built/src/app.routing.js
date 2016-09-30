"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var draft_component_1 = require('./draft/draft.component');
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'draft',
        component: draft_component_1.DraftComponent,
        data: {
            title: 'Draft'
        }
    },
    { path: '', component: dashboard_component_1.DashboardComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map