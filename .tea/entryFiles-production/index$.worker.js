
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../node_modules/dd-charts/es/f2/index');
require('../../node_modules/mini-ddui/es/search-bar/index');
require('../../node_modules/mini-ddui/es/list/index');
require('../../node_modules/mini-ddui/es/list/list-item/index');
require('../../pages/index/index');
require('../../pages/kpi/kpi');
require('../../pages/bonus/bonus');
require('../../pages/brokerage_fee/brokerage_fee');
require('../../pages/performance/performance');
require('../../pages/tem/tem');
require('../../pages/client/client');
require('../../pages/team/team');
require('../../pages/team_performance/team_performance');
require('../../pages/clientDetail/clientDetail');
require('../../pages/salesDetail/salesDetail');
require('../../pages/product/product');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
