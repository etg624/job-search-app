import React from 'react';

export const required = value =>
  value ? undefined : <div className="validate">Required</div>;
export const nonEmpty = value =>
  value.trim() !== '' ? (
    undefined
  ) : (
    <div className="validate">Cannot be empty</div>
  );
export const isTrimmed = value =>
  value.trim() === value ? (
    undefined
  ) : (
    <div className="validate">
      Cannot start or <br /> end with whitespace
    </div>
  );
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return (
      <div className="validate">
        Must be at least <br /> {length.min} characters long
      </div>
    );
  }
  if (length.max && value.length > length.max) {
    return (
      <div className="validate">
        Must be at most ${length.max} <br /> characters long
      </div>
    );
  }
};
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim() ? (
    undefined
  ) : (
    <div className="validate">Does not match</div>
  );
