import { types } from 'mobx-state-tree';

export type IBoxesStore = {
    boxes: {
        values: () => [{ color: number, word: string }]
    },
    setBox: (id: string | number, color: number, word: string) => {}
};

const Boxes = types.model({
    color: types.number,
    word: types.string
});

const RootStore = types.model({
    boxes: types.optional(types.map(Boxes), {})
}).actions(self => {
    function setBox(id: string, color: number, word: string) {
        self.boxes.set(id, { color, word});
    }

    return { setBox };
});

export default RootStore.create({});
