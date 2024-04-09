import { TYPE_WARN } from './constant.js'
function logger(log, type = 'log') {
    console[type](log)
}

export default logger