import React, { ReactNode } from "react";

interface CarModel {
    modelName: string,
    overlayNode: ReactNode,
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registeredModel: (model: CarModel) => void
    unregisteredModel: (modelName: string) => void
    getModelByName: (modelName: string) => CarModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)