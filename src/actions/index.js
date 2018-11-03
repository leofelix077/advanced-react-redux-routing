export const selectLibrary = (libraryId, active) => {
    return {
        type: "select_library",
        payload: libraryId,
        active
    }
}