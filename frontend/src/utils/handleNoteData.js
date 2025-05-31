export const handleNoteData = (data, setIsPasswordProtected, setNoteData, setAllowed) => {  
    setIsPasswordProtected(data?.passwordProtected?.protect || false);
    setNoteData(data?.passwordProtected?.note || data);
    setAllowed(!data?.passwordProtected?.protect);
};