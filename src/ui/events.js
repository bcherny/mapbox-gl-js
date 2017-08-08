// @flow

import type Map from './map';
import type Point from '@mapbox/point-geometry';
import type LngLat from '../geo/lng_lat';

/**
 * @typedef {Object} MapMouseEvent
 * @property {string} type The event type.
 * @property {Map} target The `Map` object that fired the event.
 * @property {MouseEvent} originalEvent
 * @property {Point} point The pixel coordinates of the mouse event target, relative to the map
 *   and measured from the top left corner.
 * @property {LngLat} lngLat The geographic location on the map of the mouse event target.
 */
export type MapMouseEvent = {
    type: 'mousedown'
        | 'mouseup'
        | 'click'
        | 'dblclick'
        | 'mousemove'
        | 'mouseenter'
        | 'mouseleave'
        | 'mouseover'
        | 'mouseout'
        | 'contextmenu',
    map: Map,
    originalEvent: MouseEvent,
    point: Point,
    lngLat: LngLat
};

/**
 * @typedef {Object} MapTouchEvent
 * @property {string} type The event type.
 * @property {Map} target The `Map` object that fired the event.
 * @property {TouchEvent} originalEvent
 * @property {Point} point The pixel coordinates of the center of the touch event points, relative to the map
 *   and measured from the top left corner.
 * @property {LngLat} lngLat The geographic location on the map of the center of the touch event points.
 * @property {Array<Point>} points The array of pixel coordinates corresponding to
 *   a [touch event's `touches`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches)
 *   property.
 * @property {Array<LngLat>} lngLats The geographical locations on the map corresponding to
 *   a [touch event's `touches`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches)
 *   property.
 */
export type MapTouchEvent = {
    type: 'touchstart'
        | 'touchend'
        | 'touchcancel',
    map: Map,
    originalEvent: TouchEvent,
    lngLat: LngLat,
    points: Array<Point>,
    lngLats: Array<LngLat>
};

/**
 * A `MapDataEvent` object is emitted with the {@link Map.event:data}
 * and {@link Map.event:dataloading} events. Possible values for
 * `dataType`s are:
 *
 * - `'source'`: The non-tile data associated with any source
 * - `'style'`: The [style](https://www.mapbox.com/mapbox-gl-style-spec/) used by the map
 *
 * @typedef {Object} MapDataEvent
 * @property {string} type The event type.
 * @property {string} dataType The type of data that has changed. One of `'source'`, `'style'`.
 * @property {boolean} [isSourceLoaded] True if the event has a `dataType` of `source` and the source has no outstanding network requests.
 * @property {Object} [source] The [style spec representation of the source](https://www.mapbox.com/mapbox-gl-style-spec/#sources) if the event has a `dataType` of `source`.
 * @property {string} [sourceDataType] Included if the event has a `dataType` of `source` and the event signals
 * that internal data has been received or changed. Possible values are `metadata` and `content`.
 * @property {Object} [tile] The tile being loaded or changed, if the event has a `dataType` of `source` and
 * the event is related to loading of a tile.
 * @property {Coordinate} [coord] The coordinate of the tile if the event has a `dataType` of `source` and
 * the event is related to loading of a tile.
 */
export type MapDataEvent = {
    type: string,
    dataType: string
};

export type MapEvent =
    | 'mousedown'
    | 'mouseup'
    | 'click'
    | 'dblclick'
    | 'mousemove'
    | 'mouseenter'
    | 'mouseleave'
    | 'mouseover'
    | 'mouseout'
    | 'contextmenu'
    | 'touchstart'
    | 'touchend'
    | 'touchcancel'
    | 'zoom'
    | 'movestart'
    | 'move'
    | 'moveend'
    | 'rotate'
    | 'pitch'
    | 'resize'
    | 'load'
    | 'error'
    | 'data'
    | 'styledata'
    | 'sourcedata'
    | 'dataloading'
    | 'styledataloading'
    | 'sourcedataloading'
    | 'style.load';

/**
 * Fired whenever the map is drawn to the screen, as the result of
 *
 * - a change to the map's position, zoom, pitch, or bearing
 * - a change to the map's style
 * - a change to a GeoJSON source
 * - the loading of a vector tile, GeoJSON file, glyph, or sprite
 *
 * @event render
 * @memberof Map
 * @instance
 */

/**
 * Fired when a point device (usually a mouse) leaves the map's canvas.
 *
 * @event mouseout
 * @memberof Map
 * @instance
 * @property {MapMouseEvent} data
 * @see [Highlight features under the mouse pointer](https://www.mapbox.com/mapbox-gl-js/example/hover-styles/)
 */

/**
 * Fired when a pointing device (usually a mouse) is pressed within the map.
 *
 * @event mousedown
 * @memberof Map
 * @instance
 * @property {MapMouseEvent} data
 * @see [Highlight features within a bounding box](https://www.mapbox.com/mapbox-gl-js/example/using-box-queryrenderedfeatures/)
 * @see [Create a draggable point](https://www.mapbox.com/mapbox-gl-js/example/drag-a-point/)
 */

/**
 * Fired when a pointing device (usually a mouse) is released within the map.
 *
 * @event mouseup
 * @memberof Map
 * @instance
 * @property {MapMouseEvent} data
 * @see [Highlight features within a bounding box](https://www.mapbox.com/mapbox-gl-js/example/using-box-queryrenderedfeatures/)
 * @see [Create a draggable point](https://www.mapbox.com/mapbox-gl-js/example/drag-a-point/)
 */

/**
 * Fired when a pointing device (usually a mouse) is moved within the map.
 *
 * @event mousemove
 * @memberof Map
 * @instance
 * @property {MapMouseEvent} data
 * @see [Get coordinates of the mouse pointer](https://www.mapbox.com/mapbox-gl-js/example/mouse-position/)
 * @see [Highlight features under the mouse pointer](https://www.mapbox.com/mapbox-gl-js/example/hover-styles/)
 * @see [Display a popup on hover](https://www.mapbox.com/mapbox-gl-js/example/popup-on-hover/)
 */

/**
 * Fired when a touch point is placed on the map.
 *
 * @event touchstart
 * @memberof Map
 * @instance
 * @property {MapTouchEvent} data
 */

/**
 * Fired when a touch point is removed from the map.
 *
 * @event touchend
 * @memberof Map
 * @instance
 * @property {MapTouchEvent} data
 */

/**
 * Fired when a touch point is moved within the map.
 *
 * @event touchmove
 * @memberof Map
 * @instance
 * @property {MapTouchEvent} data
 */

/**
 * Fired when a touch point has been disrupted.
 *
 * @event touchcancel
 * @memberof Map
 * @instance
 * @property {MapTouchEvent} data
 */

/**
 * Fired when a pointing device (usually a mouse) is pressed and released at the same point on the map.
 *
 * @event click
 * @memberof Map
 * @instance
 * @property {MapMouseEvent} data
 * @see [Measure distances](https://www.mapbox.com/mapbox-gl-js/example/measure/)
 * @see [Center the map on a clicked symbol](https://www.mapbox.com/mapbox-gl-js/example/center-on-symbol/)
 */

/**
 * Fired when a pointing device (usually a mouse) is clicked twice at the same point on the map.
 *
 * @event dblclick
 * @memberof Map
 * @instance
 * @property {MapMouseEvent} data
 */

/**
 * Fired when the right button of the mouse is clicked or the context menu key is pressed within the map.
 *
 * @event contextmenu
 * @memberof Map
 * @instance
 * @property {MapMouseEvent} data
 */

/**
 * Fired immediately after all necessary resources have been downloaded
 * and the first visually complete rendering of the map has occurred.
 *
 * @event load
 * @memberof Map
 * @instance
 * @type {Object}
 * @see [Draw GeoJSON points](https://www.mapbox.com/mapbox-gl-js/example/geojson-markers/)
 * @see [Add live realtime data](https://www.mapbox.com/mapbox-gl-js/example/live-geojson/)
 * @see [Animate a point](https://www.mapbox.com/mapbox-gl-js/example/animate-point-along-line/)
 */

/**
 * Fired just before the map begins a transition from one
 * view to another, as the result of either user interaction or methods such as {@link Map#jumpTo}.
 *
 * @event movestart
 * @memberof Map
 * @instance
 * @property {{originalEvent: DragEvent}} data
 */

/**
 * Fired repeatedly during an animated transition from one view to
 * another, as the result of either user interaction or methods such as {@link Map#flyTo}.
 *
 * @event move
 * @memberof Map
 * @instance
 * @property {MapMouseEvent | MapTouchEvent} data
 */

/**
 * Fired just after the map completes a transition from one
 * view to another, as the result of either user interaction or methods such as {@link Map#jumpTo}.
 *
 * @event moveend
 * @memberof Map
 * @instance
 * @property {{originalEvent: DragEvent}} data
 * @see [Play map locations as a slideshow](https://www.mapbox.com/mapbox-gl-js/example/playback-locations/)
 * @see [Filter features within map view](https://www.mapbox.com/mapbox-gl-js/example/filter-features-within-map-view/)
 */

/**
 * Fired when an error occurs. This is GL JS's primary error reporting
 * mechanism. We use an event instead of `throw` to better accommodate
 * asyncronous operations. If no listeners are bound to the `error` event, the
 * error will be printed to the console.
 *
 * @event error
 * @memberof Map
 * @instance
 * @property {{error: {message: string}}} data
 */

/**
 * Fired when any map data loads or changes. See {@link MapDataEvent}
 * for more information.
 *
 * @event data
 * @memberof Map
 * @instance
 * @property {MapDataEvent} data
 */

/**
 * Fired when the map's style loads or changes. See
 * {@link MapDataEvent} for more information.
 *
 * @event styledata
 * @memberof Map
 * @instance
 * @property {MapDataEvent} data
 */

/**
 * Fired when one of the map's sources loads or changes, including if a tile belonging
 * to a source loads or changes. See {@link MapDataEvent} for more information.
 *
 * @event sourcedata
 * @memberof Map
 * @instance
 * @property {MapDataEvent} data
 */

/**
 * Fired when any map data (style, source, tile, etc) begins loading or
 * changing asyncronously. All `dataloading` events are followed by a `data`
 * or `error` event. See {@link MapDataEvent} for more information.
 *
 * @event dataloading
 * @memberof Map
 * @instance
 * @property {MapDataEvent} data
 */

/**
 * Fired when the map's style begins loading or changing asyncronously.
 * All `styledataloading` events are followed by a `styledata`
 * or `error` event. See {@link MapDataEvent} for more information.
 *
 * @event styledataloading
 * @memberof Map
 * @instance
 * @property {MapDataEvent} data
 */

/**
 * Fired when one of the map's sources begins loading or changing asyncronously.
 * All `sourcedataloading` events are followed by a `sourcedata` or `error` event.
 * See {@link MapDataEvent} for more information.
 *
 * @event sourcedataloading
 * @memberof Map
 * @instance
 * @property {MapDataEvent} data
 */

/**
 * Fired immediately after the map has been removed with {@link Map.event:remove}.
 *
 * @event remove
 * @memberof Map
 * @instance
 */

/**
 * Fired immediately after the map has been resized.
 *
 * @event resize
 * @memberof Map
 * @instance
 */
