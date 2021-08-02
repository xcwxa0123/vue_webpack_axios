<template>
  <div>
    <h1 class="headline">
        Widget Inc.
    </h1>
    <p class="tagline">
        The perfect widgets.
        <span class="punchline">Forever.</span>
    </p>
    <!-- <button @click="reveal">重播</button> -->
    <button type="button" class="layui-btn" @click="reveal" style="margin: 20px 20px;">重播</button>
  </div>
</template>

<script>
function each(collection, callback) {
    if (isObject(collection)) {
        var keys = Object.keys(collection);
        return keys.forEach(function (key) { return callback(collection[key], key, collection); })
    }
    if (collection instanceof Array) {
        return collection.forEach(function (item, i) { return callback(item, i, collection); })
    }
    throw new TypeError('Expected either an array or object literal.')
}
function isObject(x) {
    return (
        x !== null &&
        x instanceof Object &&
        (x.constructor === Object ||
            Object.prototype.toString.call(x) === '[object Object]')
    )
}
function applyStyle (el, declaration) {
    declaration.split(';').forEach(function (pair) {
        var ref = pair.split(':');
        var property = ref[0];
        var value = ref.slice(1);
        if (property && value) {
            el.style[property.trim()] = value.join(':');
        }
    });
}
import $ from 'jquery'
export default {
    mounted () {
        this.$scrollReveal().reveal('.headline', { distance: '30px', delay: 200, origin: 'top', duration: 1300, rotate: {x: 20,z: 20}, reset: true});
        this.$scrollReveal().reveal('.tagline', { delay: 500, distance: '100px', duration: 2000, origin: 'left', rotate: {x: 20,z: 20}, reset: true});
        this.$scrollReveal().reveal('.punchline', { delay: 2000, rotate: {x: 20,z: 20}, reset: true});
    },
    methods: {
        reveal () {
            console.log('data-sr-id', $('[data-sr-id]'));
            this.initialize();
            console.log('this.$scroll', this.$scrollReveal().store);
            // console.log('window.scrollReveal', window.scrollReveal);
            // console.log('this.scrollReveal', this);
            // window.scrollReveal = this.$scroll;
            // window.scrollReveal.reveal('.punchline', { reset: true });
            // this.$scrollReveal().clean('.headline');
            // this.$scrollReveal().clean('.tagline');
            // this.$scrollReveal().clean('.punchline');
            // this.$scrollReveal().reveal('.headline', { distance: '30px',  delay: 200, origin: 'top', duration: 1300});
            // this.$scrollReveal().reveal('.tagline', { delay: 500, distance: '100px', duration: 2000, origin: 'left'});
            // this.$scrollReveal().reveal('.punchline', { delay: 2000,});
        },
        rinse() {
            const struct = () => ({
                active: [],
                stale: []
            })

            const elementIds = struct()
            const sequenceIds = struct()
            const containerIds = struct()

            /**
             * Take stock of active element IDs.
             */
            try {
                each($('[data-sr-id]'), node => {
                    if(node.getAttribute){
                        const id = parseInt(node.getAttribute('data-sr-id'))
                        elementIds.active.push(id)
                    }
                })
            } catch (e) {
                throw e
            }
            /**
             * Destroy stale elements.
             */
            each(this.$scrollReveal().store.elements, element => {
                if (elementIds.active.indexOf(element.id) === -1) {
                    elementIds.stale.push(element.id)
                }
            })

            each(elementIds.stale, staleId => delete this.$scrollReveal().store.elements[staleId])

            /**
             * Take stock of active container and sequence IDs.
             */
            each(this.$scrollReveal().store.elements, element => {
                if (containerIds.active.indexOf(element.containerId) === -1) {
                    containerIds.active.push(element.containerId)
                }
                if (element.hasOwnProperty('sequence')) {
                    if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
                        sequenceIds.active.push(element.sequence.id)
                    }
                }
            })

            /**
             * Destroy stale containers.
             */
            each(this.$scrollReveal().store.containers, container => {
                if (containerIds.active.indexOf(container.id) === -1) {
                    containerIds.stale.push(container.id)
                }
            })

            each(containerIds.stale, staleId => {
                const stale = this.$scrollReveal().store.containers[staleId].node
                stale.removeEventListener('scroll', this.$scrollReveal().delegate)
                stale.removeEventListener('resize', this.$scrollReveal().delegate)
                delete this.$scrollReveal().store.containers[staleId]
            })

            /**
             * Destroy stale sequences.
             */
            each(this.$scrollReveal().store.sequences, sequence => {
                if (sequenceIds.active.indexOf(sequence.id) === -1) {
                    sequenceIds.stale.push(sequence.id)
                }
            })

            each(sequenceIds.stale, staleId => delete this.$scrollReveal().store.sequences[staleId])
        },
        initialize() {
            // this.rinse()

            // each(this.$scrollReveal().store.elements, element => {
            //     let styles = [element.styles.inline.generated]

            //     if (element.visible) {
            //         styles.push(element.styles.opacity.computed)
            //         styles.push(element.styles.transform.generated.final)
            //         element.revealed = true
            //     } else {
            //         styles.push(element.styles.opacity.generated)
            //         styles.push(element.styles.transform.generated.initial)
            //         element.revealed = false
            //     }

            //     applyStyle(element.node, styles.filter((s) => s !== '').join(' '))
            // })

            // each(this.$scrollReveal().store.containers, container => {
            //     const target =
            //         container.node === document.documentElement ? window : container.node
            //     target.addEventListener('scroll', this.$scrollReveal().delegate)
            //     target.addEventListener('resize', this.$scrollReveal().delegate)
            // })

            // /**
            //  * Manually invoke delegate once to capture
            //  * element and container dimensions, container
            //  * scroll position, and trigger any valid reveals
            //  */
            this.$scrollReveal().delegate()

            // /**
            //  * Wipe any existing `setTimeout` now
            //  * that initialization has completed.
            //  */
            // this.$scrollReveal().initTimeout = null
        }
    }
}
</script>

<style>

</style>