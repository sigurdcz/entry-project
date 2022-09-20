export default function printRoutes(router) {
    function print(path, layer) {
        if (layer.route) {
            layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
        } else if (layer.name === 'router' && layer.handle.stack) {
            layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
        } else if (layer.method) {
            const r_method = layer.method.toUpperCase();
            const r_path = `/${path.concat(split(layer.regexp)).filter(Boolean).join('/')}`
            const routePrintable = [r_method, r_path];
            console.log(routePrintable)
        }
    }

    function split(thing) {
        if (typeof thing === 'string') {
            return thing.split('/')
        } else if (thing.fast_slash) {
            return ''
        } else {
            var match = thing.toString()
                .replace('\\/?', '')
                .replace('(?=\\/|$)', '$')
                .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
            return match
                ? match[1].replace(/\\(.)/g, '$1').split('/')
                : '<complex:' + thing.toString() + '>'
        }
    }

    router.stack.forEach(print.bind(null, []));
}