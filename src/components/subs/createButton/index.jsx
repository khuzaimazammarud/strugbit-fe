import plusSvg from '../../../../src/assets/images/plusIcon.svg'

function CreateButton({text, handleClick, toggleCreateModal}) {
    return (
      <button className="AddBtn" onClick={() => toggleCreateModal()}>
        <img src={plusSvg} style={{width: '19px', height: '20px'}}/>
        <p className='f-14' style={{marginLeft: '20px'}}>ADD NEW {text}</p>
      </button> 
    );
  }
  
  export default CreateButton;
  