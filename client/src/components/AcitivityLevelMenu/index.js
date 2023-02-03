import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_ACTIVITY_LEVEL,
    UPDATE_CURRENT_ACTIVITY_LEVEL,
} from '../../utils/actions';
import { QUERY_ACTIVITY_LEVEL } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function ActivityLevelMenu() {
  const [state, dispatch] = useStoreContext();

  const { activityLevels } = state;

  const { loading, data: activityLevelData } = useQuery(QUERY_ACTIVITY_LEVEL);

//   useEffect(() => {
//     if (loading) {
//         console.log(loading);
//     } else {
//         if (activityLevelData) {
//             console.log(activityLevelData);
//           dispatch({
//             type: UPDATE_ACTIVITY_LEVEL,
//             activityLevels: activityLevelData.activityLevels,
//           });
//         //   activityLevelData.activityLevel.forEach((activityLevel) => {
//         //     idbPromise('activityLevels', 'put', activityLevel);
//         //   });
//         } else if (!loading) {
//           idbPromise('activityLevels', 'get').then((activityLevels) => {
//             dispatch({
//               type: UPDATE_ACTIVITY_LEVEL,
//               activityLevels: activityLevels,
//             });
//           });
//         }
//     }
//   }, [activityLevelData, loading, dispatch]);

  const handleClick = (activityLevel) => {
    dispatch({
      type: UPDATE_CURRENT_ACTIVITY_LEVEL,
      currentActivityLevel: activityLevel,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {activityLevels.map((experiences) => (
        <button
          key={experiences._id}
          onClick={() => {
            handleClick(experiences._id);
          }}
        >
          {experiences.name}
        </button>
      ))}
    </div>
  );
}

export default ActivityLevelMenu;
