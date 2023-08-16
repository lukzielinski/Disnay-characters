/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type AlarmLevel = 'info' | 'warning' | 'error'

export interface StaticAlarm {
    level: AlarmLevel
    message: string
    debugMessage: string
    /** @format double */
    timestamp: number
    source: string
    active: boolean
    [key: string]: any
}

export interface Alarm {
    /** @format double */
    id: number
    level: AlarmLevel
    message: string
    debugMessage: string
    /** @format double */
    timestamp: number
    source: string
    [key: string]: any
}

/** From T, pick a set of properties whose keys are in the union K */
export type PickMapInterfaceExcludeKeysKeyofO = object

/** Construct a type with the properties of T except for those in type K. */
export type OmitMapInterfaceKeyofBaseLayerAnyWallsLayerAnyFloorLayerAny = PickMapInterfaceExcludeKeysKeyofO

export type OverrideMapInterfaceBaseLayerAnyWallsLayerAnyFloorLayerAny = OmitMapInterfaceKeyofBaseLayerAnyWallsLayerAnyFloorLayerAny & {
    floorLayer: any
    wallsLayer: any
    baseLayer: any
}

export type MapBasedOnAny = OverrideMapInterfaceBaseLayerAnyWallsLayerAnyFloorLayerAny

export interface Point2 {
    /** @format double */
    x: number
    /** @format double */
    y: number
    [key: string]: any
}

export interface RobotFootprint {
    /** @format double */
    height: number
    type: string
    points: Point2[]
    [key: string]: any
}

export interface DockingGoal {
    /** @format double */
    goal_offset_x: number
    /** @format double */
    goal_offset_y: number
    /** @format double */
    goal_offset_yaw: number
    [key: string]: any
}

export interface DockingStatus {
    pauseForcedBySafety: boolean
    paused: boolean
    /** @format double */
    distanceReamining: number
    isAccepted: boolean
    isExecuting: boolean
    isCanceling: boolean
    isSucceeded: boolean
    isCanceled: boolean
    isAborted: boolean
    failReason: string | null
    [key: string]: any
}

export interface RobotPosition {
    /** @format double */
    x: number
    /** @format double */
    y: number
    /** @format double */
    yaw: number
    [key: string]: any
}

export type Level = 'safety' | 'zone' | 'mission' | 'state'

export interface LedAnimation {
    type: 'wave' | 'static' | 'pulse'
    /** @format double */
    speed: number
    primaryColor: string
    secondaryColor: string
    [key: string]: any
}

export interface LedLevelAnimation {
    animation: LedAnimation | null
    level: Level
}

export interface Speed {
    /** @format double */
    vx: number
    /** @format double */
    vth: number
    [key: string]: any
}

export type MarkerDetectorLidarName = 'front' | 'rear' | 'virtual'

export interface MarkerDetectorMarkerPosition {
    /** @format double */
    x: number
    /** @format double */
    y: number
    /** @format double */
    yaw: number
    [key: string]: any
}

export interface Goal {
    /** @format double */
    x: number
    /** @format double */
    y: number
    /** @format double */
    yaw: number
    [key: string]: any
}

export interface NavigationStatus {
    pauseForcedBySafety: boolean
    paused: boolean
    /** @format double */
    navigationTime: number
    /** @format double */
    estimatedTime: number
    /** @format double */
    distanceReamining: number
    /** @format double */
    recoveriesNumber: number
    isAccepted: boolean
    isExecuting: boolean
    isCanceling: boolean
    isSucceeded: boolean
    isCanceled: boolean
    isAborted: boolean
    failReason: string | null
    [key: string]: any
}

export interface RelativeMoveGoal {
    /** @format double */
    target_distance: number
    angular_mode: boolean
    [key: string]: any
}

export interface RelativeMoveStatus {
    paused: boolean
    /** @format double */
    distanceRemaining: number
    isAccepted: boolean
    isExecuting: boolean
    isCanceling: boolean
    isSucceeded: boolean
    isCanceled: boolean
    isAborted: boolean
    failReason: string | null
    [key: string]: any
}

export interface RosTypesPosition {
    /** @format double */
    x: number
    /** @format double */
    y: number
    /** @format double */
    yaw: number
    [key: string]: any
}

export type MsgStatus = 'update' | 'noChange' | 'notSubscribed'

export interface MsgRosTypesPosition {
    payload: RosTypesPosition | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface Time {
    /** @format double */
    sec: number
    /** @format double */
    nanosec: number
    [key: string]: any
}

export interface Header {
    stamp: Time
    frame_id: string
    [key: string]: any
}

export interface Point {
    /** @format double */
    x: number
    /** @format double */
    y: number
    /** @format double */
    z: number
    [key: string]: any
}

export interface Quaternion {
    /** @format double */
    x: number
    /** @format double */
    y: number
    /** @format double */
    z: number
    /** @format double */
    w: number
    [key: string]: any
}

export interface Pose {
    position: Point
    orientation: Quaternion
    [key: string]: any
}

export interface MapMetaData {
    map_load_time: Time
    /** @format double */
    resolution: number
    /** @format double */
    width: number
    /** @format double */
    height: number
    origin: Pose
    [key: string]: any
}

export interface RosTypesOccupancyGrid {
    header: Header
    info: MapMetaData
    data: number[]
    [key: string]: any
}

export interface MsgRosTypesOccupancyGrid {
    payload: RosTypesOccupancyGrid | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface RosTypesLaserScan {
    header: Header
    /** @format double */
    angle_min: number
    /** @format double */
    angle_max: number
    /** @format double */
    angle_increment: number
    /** @format double */
    time_increment: number
    /** @format double */
    scan_time: number
    /** @format double */
    range_min: number
    /** @format double */
    range_max: number
    ranges: number[]
    intensities: number[]
    [key: string]: any
}

export interface MsgRosTypesLaserScan {
    payload: RosTypesLaserScan | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface MsgString {
    payload: string | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface MarkerPosition {
    /** @format double */
    x: number
    /** @format double */
    y: number
    /** @format double */
    yaw: number
    [key: string]: any
}

export interface MsgMarkerPositionArray {
    payload: MarkerPosition[] | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface RosTypesSafetyState {
    connected: boolean
    reset_button_pressed: boolean
    contactors_closed: boolean
    emergency_stop_external: boolean
    emergency_stop_back: boolean
    emergency_stop_front: boolean
    lidar_front_ok: boolean
    lidar_rear_ok: boolean
    lidar_front_dirty: boolean
    lidar_rear_dirty: boolean
    vesc_stop: boolean
    breaks: boolean
    contactors: boolean
    lidar_front_far: boolean
    lidar_front_near: boolean
    lidar_rear_far: boolean
    lidar_rear_near: boolean
    system_safe: boolean
    emergency_stops_ok: boolean
    contactor_ok: boolean
    lidars_ok: boolean
    lidar_mute: boolean
    moc0direction: boolean
    moc0drive_enable: boolean
    moc0break_enable: boolean
    moc0contactor_enable: boolean
    moc0max_speed_ok: boolean
    moc0cross_check_ok: boolean
    moc1direction: boolean
    moc1drive_enable: boolean
    moc1break_enable: boolean
    moc1contactor_enable: boolean
    moc1max_speed_ok: boolean
    moc1cross_check_ok: boolean
    standby: boolean
    [key: string]: any
}

export interface MsgRosTypesSafetyState {
    payload: RosTypesSafetyState | null
    msgStatus: MsgStatus
    [key: string]: any
}

/**
 * A typed array of 64-bit float values. The contents are initialized to 0. If the requested
 * number of bytes could not be allocated an exception is raised.
 */
export type Float64Array = Record<string, any>

export interface RosTypesBatteryStatus {
    connected: boolean
    /** @format double */
    pressure: number
    /** @format double */
    acquisition: number
    /** @format double */
    current: number
    /** @format double */
    soc: number
    /** @format double */
    charge_discharge_status: number
    /** @format double */
    charging_mos_tube_status: number
    /** @format double */
    discharging_mos_tube_status: number
    /** @format double */
    bms_life: number
    /** @format double */
    residual_capacity: number
    /** @format double */
    battery_string: number
    /** @format double */
    temperature: number
    /** @format double */
    charger_status: number
    /** @format double */
    load_status: number
    /** @format double */
    io_status: number
    /** @format double */
    charge_discharge_cycles: number
    cell_voltages: number[] | Float64Array | (number[] & Float64Array)
    cell_temperatures: number[] | Float64Array | (number[] & Float64Array)
    failure_one_stage_warning_of_unit_over_voltage1: boolean
    failure_one_stage_warning_of_unit_over_voltage2: boolean
    failure_one_stage_warning_of_unit_over_voltage3: boolean
    failure_two_stage_warning_of_unit_over_voltage: boolean
    failure_total_voltage_is_too_high_one_alarm: boolean
    failure_total_voltage_is_too_high_level_two_alarm: boolean
    failure_total_voltage_is_too_low_one_alarm: boolean
    failure_total_voltage_is_too_low_level_two_alarm: boolean
    failure_charging_temperature_too_high_one_alarm: boolean
    failure_charging_temperature_too_high_level_two_alarm: boolean
    failure_charging_temperature_too_low_one_alarm: boolean
    failure_charging_temperature_is_too_low_level_two_alarm: boolean
    failure_discharge_temperature_is_too_high_one_alarm: boolean
    failure_discharge_temperature_is_too_high_level_two_alarm: boolean
    failure_discharge_temperature_is_too_low_one_alarm: boolean
    failure_discharge_temperature_is_too_low_level_two_alarm: boolean
    failure_charge_over_current_level_one_alarm: boolean
    failure_charge_over_current_level_two_alarm: boolean
    failure_discharge_over_current_level_one_alarm: boolean
    failure_discharge_over_current_level_two_alarm: boolean
    failure_soc_is_too_high_an_alarm: boolean
    failure_soc_is_too_high_alarm_two: boolean
    failure_soc_is_too_low_level_one_alarm: boolean
    failure_soc_is_too_low_level_two_alarm: boolean
    failure_excessive_differential_pressure_level_one_alarm: boolean
    failure_excessive_differential_pressure_level_two_alarm: boolean
    failure_excessive_temperature_difference_level_one_alarm: boolean
    failure_excessive_temperature_difference_level_two_alarm: boolean
    failure_charging_mos_overtemperature_warning: boolean
    failure_discharge_mos_overtemperature_warning: boolean
    failure_charging_mos_temperature_detection_sensor_failure: boolean
    failure_discharge_mos_temperature_detection_sensor_failure: boolean
    failure_charging_mos_adhesion_failure: boolean
    failure_discharge_mos_adhesion_failure: boolean
    failure_charging_mos_breaker_failure: boolean
    failure_discharge_mos_breaker_failure: boolean
    failure_afe_acquisition_chip_malfunction: boolean
    failure_monomer_collect_drop_off: boolean
    failure_single_temperature_sensor_fault: boolean
    failure_eeprom_storage_failures: boolean
    failure_rtc_clock_malfunction: boolean
    failure_precharge_failure: boolean
    failure_vehicle_communications_malfunction: boolean
    failure_intranet_communication_module_malfunction: boolean
    failure_current_module_failure: boolean
    failure_main_pressure_detection_module: boolean
    failure_short_circuit_protection_failure: boolean
    failure_low_voltage_no_charging: boolean
    failure_gps_or_soft_switch_mos_off: boolean
    [key: string]: any
}

export interface MsgRosTypesBatteryStatus {
    payload: RosTypesBatteryStatus | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface RosTypesChargerStatus {
    connected: boolean
    /** @format double */
    max_voltage: number
    /** @format double */
    max_current: number
    /** @format double */
    battery_protection_enable: number
    /** @format double */
    voltage: number
    /** @format double */
    current: number
    hardware_failure: boolean
    overtemperature_protection: boolean
    input_voltage_abnormal: boolean
    battery_connection_failure: boolean
    communication_timeout: boolean
    [key: string]: any
}

export interface MsgRosTypesChargerStatus {
    payload: RosTypesChargerStatus | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface SoundZoneStatus {
    playing: boolean
    /** @format double */
    id: number
    /** @format double */
    volume: number
    [key: string]: any
}

export interface MsgSoundZoneStatus {
    payload: SoundZoneStatus | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface RosTypesPolygon {
    points: Point[]
    [key: string]: any
}

export interface MsgRosTypesPolygon {
    payload: RosTypesPolygon | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface StaticAlarms {
    safetyDisarmed: StaticAlarm
}

export interface MsgStaticAlarms {
    payload: StaticAlarms | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface MsgAlarmArray {
    payload: Alarm[] | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface PoseStamped {
    header: Header
    pose: Pose
    [key: string]: any
}

export interface RosTypesPath {
    header: Header
    poses: PoseStamped[]
    [key: string]: any
}

export interface MsgRosTypesPath {
    payload: RosTypesPath | null
    msgStatus: MsgStatus
    [key: string]: any
}

export interface MsgBuffer {
    robotPosition: MsgRosTypesPosition
    map: MsgRosTypesOccupancyGrid
    scan: MsgRosTypesLaserScan
    robotStatus: MsgString
    mapHash: MsgString
    markers: MsgMarkerPositionArray
    safetyState: MsgRosTypesSafetyState
    batteryState: MsgRosTypesBatteryStatus
    chargerState: MsgRosTypesChargerStatus
    soundZoneStatus: MsgSoundZoneStatus
    footprint: MsgRosTypesPolygon
    staticAlarms: MsgStaticAlarms
    dynamicAlarms: MsgAlarmArray
    globalPlan: MsgRosTypesPath
    localPlan: MsgRosTypesPath
    [key: string]: any
}

export interface Subscriptions {
    robotPosition: boolean
    map: boolean
    scan: boolean
    robotStatus: boolean
    mapHash: boolean
    markers: boolean
    safetyState: boolean
    batteryState: boolean
    chargerState: boolean
    soundZoneStatus: boolean
    footprint: boolean
    [key: string]: any
}

/**
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
 * requested number of bytes could not be allocated an exception is raised.
 */
export type Uint8Array = Record<string, any>

export type RobotState =
    | 'starting'
    | 'ready'
    | 'navigating'
    | 'navigating paused'
    | 'docking'
    | 'docking paused'
    | 'starting mapping'
    | 'mapping'
    | 'quitting mapping'
    | 'charging'
    | 'error'
    | 'safety remote access'

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean
    /** request path */
    path: string
    /** content type of request body */
    type?: ContentType
    /** query params */
    query?: QueryParamsType
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat
    /** request body */
    body?: unknown
    /** base url */
    baseUrl?: string
    /** request cancellation token */
    cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
    customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D
    error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
    Json = 'application/json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
    Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string = '/'
    private securityData: SecurityDataType | null = null
    private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
    private abortControllers = new Map<CancelToken, AbortController>()
    private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

    private baseApiParams: RequestParams = {
        credentials: 'same-origin',
        headers: {},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }

    constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
        Object.assign(this, apiConfig)
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data
    }

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key)
        return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key])
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key]
        return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
    }

    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query = rawQuery || {}
        const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
        return keys
            .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
            .join('&')
    }

    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString = this.toQueryString(rawQuery)
        return queryString ? `?${queryString}` : ''
    }

    private contentFormatters: Record<ContentType, (input: any) => any> = {
        [ContentType.Json]: (input: any) =>
            input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
        [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
        [ContentType.FormData]: (input: any) =>
            Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key]
                formData.append(
                    key,
                    property instanceof Blob
                        ? property
                        : typeof property === 'object' && property !== null
                        ? JSON.stringify(property)
                        : `${property}`
                )
                return formData
            }, new FormData()),
        [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
    }

    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        }
    }

    protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken)
            if (abortController) {
                return abortController.signal
            }
            return void 0
        }

        const abortController = new AbortController()
        this.abortControllers.set(cancelToken, abortController)
        return abortController.signal
    }

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController = this.abortControllers.get(cancelToken)

        if (abortController) {
            abortController.abort()
            this.abortControllers.delete(cancelToken)
        }
    }

    public request = async <T = any, E = any>({
        body,
        secure,
        path,
        type,
        query,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<HttpResponse<T, E>> => {
        const secureParams =
            ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {}
        const requestParams = this.mergeRequestParams(params, secureParams)
        const queryString = query && this.toQueryString(query)
        const payloadFormatter = this.contentFormatters[type || ContentType.Json]
        const responseFormat = format || requestParams.format

        return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
            },
            signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
            body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
        }).then(async (response) => {
            const r = response as HttpResponse<T, E>
            r.data = null as unknown as T
            r.error = null as unknown as E

            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                      .then((data) => {
                          if (r.ok) {
                              r.data = data
                          } else {
                              r.error = data
                          }
                          return r
                      })
                      .catch((e) => {
                          r.error = e
                          return r
                      })

            if (cancelToken) {
                this.abortControllers.delete(cancelToken)
            }

            if (!response.ok) throw data
            return data
        })
    }
}

/**
 * @title agv-local-backend
 * @version 1.0.0
 * @license ISC
 * @baseUrl /
 * @contact
 *
 * agv-local-backend
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    alarms = {
        /**
         * No description
         *
         * @name GetStaticAlarms
         * @request GET:/alarms/getStaticAlarms
         */
        getStaticAlarms: (params: RequestParams = {}) =>
            this.request<
                {
                    safetyDisarmed: StaticAlarm
                },
                any
            >({
                path: `/alarms/getStaticAlarms`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name GetDynamicAlarms
         * @request GET:/alarms/getDynamicAlarms
         */
        getDynamicAlarms: (params: RequestParams = {}) =>
            this.request<Alarm[], any>({
                path: `/alarms/getDynamicAlarms`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name ResetAlarm
         * @request PATCH:/alarms/resetAlarm
         */
        resetAlarm: (data: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/alarms/resetAlarm`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),
    }
    map = {
        /**
         * No description
         *
         * @name GetCurrentMapId
         * @request GET:/map/getCurrentMapId
         */
        getCurrentMapId: (params: RequestParams = {}) =>
            this.request<number | null, any>({
                path: `/map/getCurrentMapId`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name ChangeMap
         * @request PATCH:/map/changeMap
         */
        changeMap: (data: MapBasedOnAny, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/map/changeMap`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @name ChangeFootprint
         * @request PATCH:/map/changeFootprint
         */
        changeFootprint: (data: RobotFootprint, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/map/changeFootprint`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),
    }
    docking = {
        /**
         * No description
         *
         * @name StartDocking
         * @request PATCH:/docking/startDocking
         */
        startDocking: (data: DockingGoal, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/docking/startDocking`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @name Pause
         * @request PATCH:/docking/pause
         */
        pause: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/docking/pause`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Cancel
         * @request PATCH:/docking/cancel
         */
        cancel: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/docking/cancel`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Resume
         * @request PATCH:/docking/resume
         */
        resume: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/docking/resume`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name GetDockingStatus
         * @request GET:/docking/dockingStatus
         */
        getDockingStatus: (params: RequestParams = {}) =>
            this.request<DockingStatus, any>({
                path: `/docking/dockingStatus`,
                method: 'GET',
                format: 'json',
                ...params,
            }),
    }
    estimatePosition = {
        /**
         * No description
         *
         * @name EstimatePosition
         * @request PATCH:/estimatePosition/estimatePosition
         */
        estimatePosition: (data: RobotPosition, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/estimatePosition/estimatePosition`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),
    }
    ledStrip = {
        /**
         * No description
         *
         * @name SetAnimation
         * @request PATCH:/ledStrip/setAnimation
         */
        setAnimation: (data: LedLevelAnimation, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/ledStrip/setAnimation`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),
    }
    manual = {
        /**
         * No description
         *
         * @name SetSpeed
         * @request PATCH:/manual/setSpeed
         */
        setSpeed: (data: Speed, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/manual/setSpeed`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),
    }
    marker = {
        /**
         * No description
         *
         * @name ChangeLidar
         * @request PATCH:/marker/changeLidar
         */
        changeLidar: (
            data: {
                lidar: MarkerDetectorLidarName
            },
            params: RequestParams = {}
        ) =>
            this.request<void, string>({
                path: `/marker/changeLidar`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @name DetectMarker
         * @request PATCH:/marker/detectMarker
         */
        detectMarker: (
            data: {
                lidar: MarkerDetectorLidarName
                positionEstimate: MarkerDetectorMarkerPosition
            },
            params: RequestParams = {}
        ) =>
            this.request<boolean, string>({
                path: `/marker/detectMarker`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),
    }
    navigation = {
        /**
         * No description
         *
         * @name MoveToPose
         * @request PATCH:/navigation/moveToPose
         */
        moveToPose: (data: Goal, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/navigation/moveToPose`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @name Pause
         * @request PATCH:/navigation/pause
         */
        pause: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/navigation/pause`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Cancel
         * @request PATCH:/navigation/cancel
         */
        cancel: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/navigation/cancel`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Resume
         * @request PATCH:/navigation/resume
         */
        resume: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/navigation/resume`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name GetNavigationStatus
         * @request GET:/navigation/navigationStatus
         */
        getNavigationStatus: (params: RequestParams = {}) =>
            this.request<NavigationStatus, any>({
                path: `/navigation/navigationStatus`,
                method: 'GET',
                format: 'json',
                ...params,
            }),
    }
    relativeMove = {
        /**
         * No description
         *
         * @name StartRelativeMove
         * @request PATCH:/relativeMove/startRelativeMove
         */
        startRelativeMove: (data: RelativeMoveGoal, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/relativeMove/startRelativeMove`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @name Pause
         * @request PATCH:/relativeMove/pause
         */
        pause: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/relativeMove/pause`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Cancel
         * @request PATCH:/relativeMove/cancel
         */
        cancel: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/relativeMove/cancel`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Resume
         * @request PATCH:/relativeMove/resume
         */
        resume: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/relativeMove/resume`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name GetRelativeMoveStatus
         * @request GET:/relativeMove/relativeMoveStatus
         */
        getRelativeMoveStatus: (params: RequestParams = {}) =>
            this.request<RelativeMoveStatus, any>({
                path: `/relativeMove/relativeMoveStatus`,
                method: 'GET',
                format: 'json',
                ...params,
            }),
    }
    serverSynchronizer = {
        /**
         * No description
         *
         * @name Update
         * @request POST:/serverSynchronizer
         */
        update: (data: Subscriptions, params: RequestParams = {}) =>
            this.request<MsgBuffer, string>({
                path: `/serverSynchronizer`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),
    }
    sound = {
        /**
         * No description
         *
         * @name SetVolume
         * @request PATCH:/sound/setVolume
         */
        setVolume: (
            data: {
                /** @format double */
                volume: number
            },
            params: RequestParams = {}
        ) =>
            this.request<void, any>({
                path: `/sound/setVolume`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @name IsPlaying
         * @request GET:/sound/isPlaying
         */
        isPlaying: (params: RequestParams = {}) =>
            this.request<boolean, any>({
                path: `/sound/isPlaying`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name GetSoundId
         * @request GET:/sound/soundId
         */
        getSoundId: (params: RequestParams = {}) =>
            this.request<number, any>({
                path: `/sound/soundId`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name Play
         * @request PATCH:/sound/play
         */
        play: (
            data: {
                /** @format double */
                id: number
                /**
                 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
                 * requested number of bytes could not be allocated an exception is raised.
                 */
                dataMp3: Uint8Array
            },
            params: RequestParams = {}
        ) =>
            this.request<any, string>({
                path: `/sound/play`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name PlayLoop
         * @request PATCH:/sound/playLoop
         */
        playLoop: (
            data: {
                /** @format double */
                id: number
                /**
                 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
                 * requested number of bytes could not be allocated an exception is raised.
                 */
                dataMp3: Uint8Array
            },
            params: RequestParams = {}
        ) =>
            this.request<any, string>({
                path: `/sound/playLoop`,
                method: 'PATCH',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name Pause
         * @request PATCH:/sound/pause
         */
        pause: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/sound/pause`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Replay
         * @request PATCH:/sound/replay
         */
        replay: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/sound/replay`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name Stop
         * @request PATCH:/sound/stop
         */
        stop: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/sound/stop`,
                method: 'PATCH',
                ...params,
            }),
    }
    status = {
        /**
         * No description
         *
         * @name Ping
         * @request GET:/status/ping
         */
        ping: (params: RequestParams = {}) =>
            this.request<string, any>({
                path: `/status/ping`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name Status
         * @request GET:/status
         */
        status: (params: RequestParams = {}) =>
            this.request<RobotState, any>({
                path: `/status`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @name StartMapping
         * @request PATCH:/status/startMapping
         */
        startMapping: (params: RequestParams = {}) =>
            this.request<
                void,
                {
                    name: string
                }
            >({
                path: `/status/startMapping`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name QuitMapping
         * @request PATCH:/status/quitMapping
         */
        quitMapping: (params: RequestParams = {}) =>
            this.request<
                void,
                {
                    name: string
                }
            >({
                path: `/status/quitMapping`,
                method: 'PATCH',
                ...params,
            }),

        /**
         * No description
         *
         * @name ActivateSafetyRemoteAccess
         * @request PATCH:/status/activateSafetyRemoteAccess
         */
        activateSafetyRemoteAccess: (params: RequestParams = {}) =>
            this.request<
                void,
                {
                    name: string
                }
            >({
                path: `/status/activateSafetyRemoteAccess`,
                method: 'PATCH',
                ...params,
            }),
    }
}
