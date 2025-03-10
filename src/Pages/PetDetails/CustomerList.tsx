import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/index.ts';
import { fetchCustomers } from '../../Reducers/petReducer.tsx';
import { Slide } from 'react-awesome-reveal';
import { OneTimeAnimations } from '../../Utils/constants/index.tsx';
import useAnimationOnce from '../../CustomHooks/useAnimationOnce.ts';

const CustomerList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { customers, customersStatus, error } = useSelector(
    (state: RootState) => state.pets
  );

  useEffect(() => {
    if (customersStatus === 'idle') {
      dispatch(fetchCustomers());
    }
  }, [dispatch, customersStatus]);

  const shouldAnimate = useAnimationOnce(OneTimeAnimations.CUSTOMER_LIST_ANIMATION);

  const customerContent = customers?.map((customer) => (
    <div key={customer.id} className="rounded-lg overflow-hidden">
      {shouldAnimate ? (
        <Slide direction="left" triggerOnce={true}>
          <img
            src={customer.customer_image}
            alt={`Customer ${customer.id}`}
            className="w-[85%] mx-auto sm:w-full h-96 object-cover rounded-lg shadow-md"
          />
        </Slide>
      ) : (
        <img
          src={customer.customer_image}
          alt={`Customer ${customer.id}`}
          className="w-[85%] mx-auto sm:w-full h-96 object-cover rounded-lg shadow-md"
        />
      )}
    </div>
  ));

  return (
    <section className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 sm:text-left text-center">
        Customer Images
      </h2>

      {customersStatus === 'loading' && (
        <p className="text-center">Loading customers...</p>
      )}
      {customersStatus === 'failed' && (
        <p className="text-red-0 text-center">{error}</p>
      )}

      {customersStatus === 'succeeded' && customers?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {customerContent}
        </div>
      ) : (
        <p className="text-center">No customers!! available</p>
      )}
    </section>
  );
};

export default CustomerList;
