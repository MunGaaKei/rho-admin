import { computed } from "vue";

/**
 *
 * @param {*} store <Store>
 * @param {*} states Expected: [ ...keys ]
 * @returns
 */
function mapState(store, states) {
    return Object.fromEntries(
        states.map((key) => {
            if (typeof key === "string") {
                return [key, computed(() => store[key])];
            } else {
                /**
                 * if the array item typeof array
                 * then item 0 stands for key
                 * and item 1 stands for alia name
                 */
                return [key[1], computed(() => store[key[0]])];
            }
        })
    );
}

export { mapState };
