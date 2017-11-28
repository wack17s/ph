import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { TODO_STORE, BOXES_STORE } from '../../constants/stores';
import { ITodoStore } from '../../stores/todo';
import { IBoxesStore } from '../../stores/boxes';

import Styles from './styles';

export interface Props {
    TODO_STORE?: ITodoStore;
    BOXES_STORE?: IBoxesStore;
}

@inject(TODO_STORE, BOXES_STORE)
@observer
class Hello extends React.Component<Props, object> {
    // state = {
    //     color0: 0,
    //     color1: 1,
    //     color2: 2,
    //     color3: 3,
    //     color4: 4,
    //     color5: 5,
    //     color6: 6,
    //     color7: 7,
    //     color8: 8,
    //     color9: 9
    // };

    state = {
        words: ['MST', 'cxs']
    };

    render() {
        // const x = [0] as [number];
        const y = [0] as [number];

        // for (let i = 1; i < 10; i++) {
        //     x.push(i);
        // }

        for (let i = 1; i < 1000; i++) {
            y.push(i);
        }

        return (
            <div>
                <button className={Styles.fuckButton} onClick={this.onClick}>FUCK REDUX</button>

                {y.map((a, b) => this.props.BOXES_STORE!.boxes.values().map((item, i) => (
                    <div
                        key={i * b || Math.random()}
                        className={`${Styles.box} ${Styles.boxColor(item.color)}`} // this.state[`color${i}`]
                    >
                        {item.word}
                    </div>
                )))}
            </div>
        );
    }

    private onClick = (): void => {
        // const obj = {};

        for (let i = 0; i < 10; i++) {
            this.props.BOXES_STORE!.setBox(
                i,
                Math.floor(Math.random() * 10),
                this.state.words[Math.floor(Math.random() * 2)]
            );

            // obj[`color${i}`] = Math.floor(Math.random() * 10);
        }

        // this.setState(obj);
    }
}

export default Hello;
