import {types} from "mobx-state-tree"

export const Site = types.model("Site",{
    id: types.identifier,
    url: types.string,
    title: types.string,
    settings: types.frozen(SiteSettings)
})

const SiteSettings = types.model("Settings", { 
    timeOut: types.number,
    status: types.enumeration("Status",["Pending","Passed","Failed","None"]),
    timestamp: types.number
})