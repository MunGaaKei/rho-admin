import { createVNode, render, ref, reactive, nextTick } from "vue";
import Messages from "./index.vue";

const defs = {
    html: "...",
    timeout: 3000,
    closable: true,
};
const messages = ref([]);
let _key = 0;

const Instance = createVNode(Messages, { messages: messages.value });
render(Instance, document.body);

function Message(options = {}) {
    const message = createMessage(options);
    messages.value.push(message);

    initMessage(message);

    nextTick(() => {
        setTimeout(() => {
            message.show = true;
        }, 0);
    });

    return message;
}

function createMessage(options) {
    if (typeof options === "string") {
        options = Object.assign({}, defs, { html: options });
    }
    options.key = _key++;

    return reactive(options);
}

function initMessage(message) {
    let _timer = null;

    if (message.timeout) {
        _timer = setTimeout(() => {
            message.show = false;
            removeMessage(message.key);
        }, message.timeout);
    }

    message.handleClick = () => {
        message.onClick && message.onClick();
        if (message.closable) {
            message.show = false;
            removeMessage(message.key);
            _timer && clearTimeout(_timer);
        }
    };
}

function removeMessage(key) {
    setTimeout(() => {
        let index = messages.value.findIndex((m) => m.key === key);
        if (index > -1) {
            messages.value.splice(index, 1);
        }
    }, 240);
}

export default Message;
