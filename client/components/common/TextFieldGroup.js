import React from 'react';
import classnames from 'classnames';
import TextField from 'material-ui/TextField';


const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div>
      
      <TextField
        floatingLabelText={label}
        onChange={onChange}
        //onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        
      />
    {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  //checkUserExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;