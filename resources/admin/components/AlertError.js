import React from "react";
import {Alert} from "reactstrap";

const AlertError = ({errors = {}}) => {
  var error_list = Object.values(errors)
  const LiError = ({error,error_index}) =>
    error.map((value,index) => <li key={`${error_index}_${index}`}>{value}</li>);

  return (
    <>
      {error_list.length > 0 &&
      <Alert color="danger" className={'rounded-sm'}>
        <ul className={'my-0 pl-3'}>
          {error_list.map((error,index) => (
            <LiError error={error} key={index} error_index={index}/>
          ))}
        </ul>
      </Alert>
      }
    </>
  )
}

export default AlertError;
