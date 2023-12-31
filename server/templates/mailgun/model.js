const request = require("request-promise");

const builder = require("./builder");

const template = (apiKey, domain, apiRoot, dashboardOrder = 0) => ({
  "Connections": [{
    "host": `${apiRoot}/v3`,
    "dbName": null,
    "port": null,
    "username": null,
    "password": null,
    "options": [],
    "connectionString": "null",
    "authentication": {
      "type": "basic_auth",
      "user": "api",
      "pass": apiKey,
    },
    "firebaseServiceAccount": null,
    "name": "MailgunAPI",
    "type": "api",
    "subType": "mailgun",
    "active": true,
    "srv": false
  }],
  "Charts": [
    {
      "tid": 0,
      "name": "Sending stats",
      "type": "line",
      "subType": "AddTimeseries",
      "public": false,
      "chartSize": 1,
      "dashboardOrder": dashboardOrder + 1,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": "2021-05-08T15:59:59.000Z",
      "endDate": "2021-05-15T15:59:59.000Z",
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].delivered": "object",
            "root.stats[].delivered.smtp": "number",
            "root.stats[].delivered.http": "number",
            "root.stats[].delivered.optimized": "number",
            "root.stats[].delivered.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].delivered.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "rgba(65, 117, 5, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Delivered",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=delivered`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "",
            "itemsLimit": 1000,
            "offset": "",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].failed": "object",
            "root.stats[].failed.temporary": "object",
            "root.stats[].failed.temporary.espblock": "number",
            "root.stats[].failed.temporary.total": "number",
            "root.stats[].failed.permanent": "object",
            "root.stats[].failed.permanent.suppress-bounce": "number",
            "root.stats[].failed.permanent.suppress-unsubscribe": "number",
            "root.stats[].failed.permanent.suppress-complaint": "number",
            "root.stats[].failed.permanent.bounce": "number",
            "root.stats[].failed.permanent.delayed-bounce": "number",
            "root.stats[].failed.permanent.webhook": "number",
            "root.stats[].failed.permanent.optimized": "number",
            "root.stats[].failed.permanent.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].failed.permanent.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "rgba(245, 166, 35, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Failed",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=failed`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.items[].address": "string",
            "root.items[].code": "string",
            "root.items[].error": "string",
            "root.items[].created_at": "date",
            "root.items[].MessageHash": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.items[].created_at",
          "xAxisOperation": null,
          "yAxis": "root.items[].MessageHash",
          "yAxisOperation": "count",
          "dateField": "root.items[].created_at",
          "datasetColor": "#BCBD22",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Bounced",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/bounces`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "offset",
            "paginationField": "paging.next",
            "template": "url"
          }],
        }
      ]
    },
    {
      "tid": 1,
      "name": "All events timeline",
      "type": "line",
      "subType": "timeseries",
      "public": false,
      "chartSize": 3,
      "dashboardOrder": dashboardOrder + 2,
      "displayLegend": true,
      "pointRadius": null,
      "startDate": "2021-05-11T15:59:59.000Z",
      "endDate": "2021-05-18T15:59:59.000Z",
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].delivered": "object",
            "root.stats[].delivered.smtp": "number",
            "root.stats[].delivered.http": "number",
            "root.stats[].delivered.optimized": "number",
            "root.stats[].delivered.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].delivered.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "#9467BD",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Delivered",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=delivered`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].failed": "object",
            "root.stats[].failed.temporary": "object",
            "root.stats[].failed.temporary.espblock": "number",
            "root.stats[].failed.temporary.total": "number",
            "root.stats[].failed.permanent": "object",
            "root.stats[].failed.permanent.suppress-bounce": "number",
            "root.stats[].failed.permanent.suppress-unsubscribe": "number",
            "root.stats[].failed.permanent.suppress-complaint": "number",
            "root.stats[].failed.permanent.bounce": "number",
            "root.stats[].failed.permanent.delayed-bounce": "number",
            "root.stats[].failed.permanent.webhook": "number",
            "root.stats[].failed.permanent.optimized": "number",
            "root.stats[].failed.permanent.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].failed.permanent.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "rgba(188, 189, 34, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Failed",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=failed`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].opened": "object",
            "root.stats[].opened.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].opened.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "rgba(31, 119, 180, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Opened",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=opened`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].clicked": "object",
            "root.stats[].clicked.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].clicked.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "rgba(44, 160, 44, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Clicked",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=clicked`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].unsubscribed": "object",
            "root.stats[].unsubscribed.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].unsubscribed.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "#7F7F7F",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Unsubscribed",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=unsubscribed`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].complained": "object",
            "root.stats[].complained.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].complained.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "rgba(214, 39, 40, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Complained",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=complained`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 100,
            "offset": "offset",
            "paginationField": "paging.next",
            "template": "url"
          }],
        }
      ]
    },
    {
      "tid": 2,
      "name": "Opens & clicks timeline",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 3,
      "displayLegend": true,
      "pointRadius": null,
      "startDate": "2021-05-08T15:59:59.000Z",
      "endDate": "2021-05-15T15:59:59.000Z",
      "includeZeros": true,
      "currentEndDate": true,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpichart",
      "showGrowth": true,
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].delivered": "object",
            "root.stats[].delivered.smtp": "number",
            "root.stats[].delivered.http": "number",
            "root.stats[].delivered.optimized": "number",
            "root.stats[].delivered.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].delivered.total",
          "yAxisOperation": "sum",
          "dateField": "root.stats[].time",
          "datasetColor": "#9467BD",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Delivered",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=delivered`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].opened": "object",
            "root.stats[].opened.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].opened.total",
          "yAxisOperation": "sum",
          "dateField": "root[].time",
          "datasetColor": "rgba(29, 120, 180, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Opens",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=opened`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.stats[].time": "date",
            "root.stats[].clicked": "object",
            "root.stats[].clicked.total": "number"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.stats[].time",
          "xAxisOperation": null,
          "yAxis": "root.stats[].clicked.total",
          "yAxisOperation": "sum",
          "dateField": "root[].time",
          "datasetColor": "rgba(45, 160, 45, 1)",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Clicked",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/stats/total?event=clicked`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "skip",
            "paginationField": "paging.next",
            "template": "url"
          }],
        }
      ]
    },
    {
      "tid": 3,
      "name": "Suppressions details",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "chartSize": 2,
      "dashboardOrder": dashboardOrder + 4,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "Datasets": [
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.items[].address": "string",
            "root.items[].tags": "array",
            "root.items[].created_at": "date"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.items[].created_at",
          "xAxisOperation": null,
          "yAxis": "root.items[].address",
          "yAxisOperation": "count",
          "dateField": "root.items[].created_at",
          "datasetColor": "#9467BD",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Unsubscribes",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/unsubscribes`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "offset",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.items[].address": "string",
            "root.items[].code": "string",
            "root.items[].error": "string",
            "root.items[].created_at": "date",
            "root.items[].MessageHash": "string"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.items[].created_at",
          "xAxisOperation": null,
          "yAxis": "root.items[].address",
          "yAxisOperation": "count",
          "dateField": "root.items[].created_at",
          "datasetColor": "#BCBD22",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Bounces",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/bounces`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "offset",
            "paginationField": "paging.next",
            "template": "url"
          }],
        },
        {
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "fieldsSchema": {
            "root.items[].address": "string",
            "root.items[].created_at": "date"
          },
          "excludedFields": null,
          "query": null,
          "xAxis": "root.items[].created_at",
          "xAxisOperation": null,
          "yAxis": "root.items[].address",
          "yAxisOperation": "count",
          "dateField": "root.items[].created_at",
          "datasetColor": "#1F77B4",
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Complaints",
          "pointRadius": null,
          "formula": null,
          "DataRequests": [{
            "headers": {},
            "body": "null",
            "conditions": null,
            "method": "GET",
            "route": `/${domain}/complaints`,
            "useGlobalHeaders": true,
            "query": null,
            "pagination": true,
            "items": "items",
            "itemsLimit": 1000,
            "offset": "offset",
            "paginationField": "paging.next",
            "template": "url"
          }],
        }
      ]
    }
  ],
});

module.exports.template = template;

module.exports.build = async (projectId, {
  apiKey, domain, domainLocation, charts, connection_id,
}, dashboardOrder) => {
  if ((!apiKey || !domain) && !connection_id) return Promise.reject("Missing required authentication arguments");

  const apiRoot = domainLocation === "eu" ? "https://api.eu.mailgun.net" : "https://api.mailgun.net/";

  let checkErrored = false;
  if (!connection_id) {
    const checkOpt = {
      url: `${apiRoot}/v3/${domain}/stats/total?event=delivered&limit=10`,
      method: "GET",
      auth: {
        user: "api",
        pass: apiKey,
      },
      headers: {
        accept: "application/json",
      },
      json: true,
    };

    try {
      const checkAuth = await request(checkOpt); // eslint-disable-line
    } catch (e) {
      checkErrored = true;
    }
  }

  if (!connection_id && checkErrored) {
    return Promise.reject(new Error("Request cannot be authenticated"));
  }

  return builder(
    projectId, apiKey, domain, apiRoot, dashboardOrder, template, charts, connection_id
  )
    .catch((err) => {
      if (err && err.message) {
        return Promise.reject(err.message);
      }
      return Promise.reject(err);
    });
};
