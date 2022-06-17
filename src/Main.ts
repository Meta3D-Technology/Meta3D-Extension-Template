import { getExtensionService as getExtensionServiceMeta3D, createExtensionState as createExtensionStateMeta3D, getExtensionLife as getLifeMeta3D } from "meta3d-type"
import { state } from "your-protocol/src/state/StateType"
import { service } from "your-protocol/src/service/ServiceType"
import { dependentExtensionNameMap } from "your-protocol/src/service/DependentExtensionType"
import { dependentContributeNameMap } from "your-protocol/src/service/DependentContributeType"

export let getExtensionService: getExtensionServiceMeta3D<
	dependentExtensionNameMap,
	dependentContributeNameMap,
	service
> = (api, [dependentExtensionNameMap, dependentContributeNameMap]) => {
	return {
		TODO
	}
}

export let createExtensionState: createExtensionStateMeta3D<
	state
> = () => {
	return {
		TODO
	}
}

export let getExtensionLife: getLifeMeta3D<service> = (api, extensionName) => {
	return {
		TODO
	}
}
