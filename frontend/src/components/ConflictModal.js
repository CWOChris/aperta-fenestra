const ConflictModal = ({ conflict, resolveConflict }) => {
    if (!conflict) return null;
  
    return (
      <div className="modal">
        <h3>Conflict Detected</h3>
        <p>Your submission conflicts with an existing event.</p>
        <button onClick={() => resolveConflict("keep")}>Keep My Version</button>
        <button onClick={() => resolveConflict("overwrite")}>Use Online Version</button>
      </div>
    );
  };
  
  export default ConflictModal;
  