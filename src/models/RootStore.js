import { types, flow, destroy, applySnapshot, onSnapshot, getSnapshot, } from 'mobx-state-tree';
import { Site } from './Site';
import { v4 as uuidv4 } from 'uuid';

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
        }
}})

export const rootStore = RootStore.create({sites:[]})