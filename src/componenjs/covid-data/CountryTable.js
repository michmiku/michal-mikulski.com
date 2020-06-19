var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState, useEffect } from "react";
import { Table, Flag, Loader } from 'semantic-ui-react';
import axios from 'axios';
import '../../styles/css/covid19.css';
import _ from 'lodash';
var CountryTable = function (_a) {
    var setAllData = _a.setAllData, countryData = _a.countryData, setCountry = _a.setCountry, setCurrentCord = _a.setCurrentCord, country = _a.country;
    var _b = useState([]), data = _b[0], setData = _b[1];
    var _c = useState({
        column: null,
        data: data,
        direction: null
    }), sort = _c[0], setSort = _c[1];
    var _d = useState(true), isLoading = _d[0], setIsLoading = _d[1];
    useEffect(function () {
        axios.get('https://disease.sh/v2/countries')
            .then(function (res) {
            var data = [];
            res.data.map(function (item) {
                if (item.countryInfo.iso2 !== null) {
                    data = __spreadArrays(data, [{
                            flag: item.countryInfo.iso2.toLowerCase(),
                            country: item.country,
                            totalCases: item.cases,
                            newCases: item.todayCases,
                            totalDeaths: item.deaths,
                            newDeaths: item.todayDeaths,
                            totalRecovered: item.recovered,
                            newRecovered: item.todayRecovered,
                            activeCases: (item.cases - item.deaths - item.recovered),
                            lat: item.countryInfo.lat,
                            long: item.countryInfo.long
                        }]);
                }
            });
            setAllData(data);
            setData(data);
            setSort({
                column: null,
                data: data,
                direction: null
            });
            setIsLoading(false);
        })["catch"](function (err) { return console.log(err); });
    }, []);
    var handleSort = function (clickedColumn) { return function () {
        var column = sort.column, data = sort.data, direction = sort.direction;
        if (column !== clickedColumn) {
            setSort({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending'
            });
            return;
        }
        else {
            setSort({
                column: clickedColumn,
                data: data.reverse(),
                direction: direction === 'ascending' ? 'descending' : 'ascending'
            });
        }
    }; };
    var handleChange = function (value) {
        var temp = countryData.data.filter(function (item) {
            if (item.countryInfo !== undefined) {
                return item.countryInfo.iso2 === value.toUpperCase();
            }
        });
        setCountry({ country: temp[0].country, slug: temp[0].countryInfo.iso3, flag: temp[0].countryInfo.iso2 });
        setCurrentCord({ lat: temp[0].countryInfo.lat, long: temp[0].countryInfo.long });
    };
    return (React.createElement("div", { style: { width: '100%', height: '100%', overflow: 'auto ' } },
        React.createElement(Table, { sortable: true, celled: true, fixed: true },
            React.createElement(Table.Header, null,
                React.createElement(Table.Row, null,
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'country' ? sort.direction : null, onClick: handleSort('country') }, "Country"),
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'totalCases' ? sort.direction : null, onClick: handleSort('totalCases') }, "Total cases"),
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'newCases' ? sort.direction : null, onClick: handleSort('newCases') }, "New cases"),
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'totalDeaths' ? sort.direction : null, onClick: handleSort('totalDeaths') }, "Total deaths"),
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'newDeaths' ? sort.direction : null, onClick: handleSort('newDeaths') }, "New deaths"),
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'totalRecovered' ? sort.direction : null, onClick: handleSort('totalRecovered') }, "Total recovered"),
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'newRecovered' ? sort.direction : null, onClick: handleSort('newRecovered') }, "New recovered"),
                    React.createElement(Table.HeaderCell, { style: { position: 'sticky', top: '0' }, sorted: sort.column === 'activeCases' ? sort.direction : null, onClick: handleSort('activeCases') }, "Active cases"))),
            isLoading ?
                React.createElement(Loader, { active: true, inline: 'centered', content: 'Loading', style: { margin: '20px', left: '40vw' } }) :
                React.createElement(Table.Body, null, sort.data.map(function (item, key) { return (country.country === item.country ? React.createElement(Table.Row, { key: key, onClick: function () { handleChange(item.flag); }, style: { cursor: 'pointer' }, className: 'country-row-selected' },
                    React.createElement(Table.Cell, null,
                        React.createElement(Flag, { name: item.flag }),
                        item.country),
                    React.createElement(Table.Cell, null, item.totalCases),
                    React.createElement(Table.Cell, null, item.newCases),
                    React.createElement(Table.Cell, null, item.totalDeaths),
                    React.createElement(Table.Cell, null, item.newDeaths),
                    React.createElement(Table.Cell, null, item.totalRecovered),
                    React.createElement(Table.Cell, null, item.newRecovered),
                    React.createElement(Table.Cell, null, item.activeCases)) :
                    React.createElement(Table.Row, { key: key, onClick: function () { handleChange(item.flag); }, style: { cursor: 'pointer' }, className: 'country-row' },
                        React.createElement(Table.Cell, null,
                            React.createElement(Flag, { name: item.flag }),
                            item.country),
                        React.createElement(Table.Cell, null, item.totalCases),
                        React.createElement(Table.Cell, null, item.newCases),
                        React.createElement(Table.Cell, null, item.totalDeaths),
                        React.createElement(Table.Cell, null, item.newDeaths),
                        React.createElement(Table.Cell, null, item.totalRecovered),
                        React.createElement(Table.Cell, null, item.newRecovered),
                        React.createElement(Table.Cell, null, item.activeCases))); })))));
};
export default CountryTable;
