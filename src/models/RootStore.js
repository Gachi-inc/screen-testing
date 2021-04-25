import { types, flow, destroy, applySnapshot, onSnapshot, getSnapshot, } from 'mobx-state-tree';
import { Site } from './Site';
import { v4 as uuidv4 } from 'uuid';
import {sitesApi } from "../api"
const RootStore = types.model("Root",{
    sites: types.optional(types.array(Site), [])
})
.actions(self => {
    return {
        addSite: (site) => {
            site.settings.status = "None";
            site.settings.timestamp = 0;
            site.id = uuidv4();
            console.log(site);
            self.sites.push(site)
            const res = sitesApi.addSiteToList(site)
            console.log(res)
        }
}})

export const rootStore = RootStore.create({sites:[]})