import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useUniquePropValues } from '../../shared/hooks/usePropValues';
import { resetFilter, setFilter } from '../../redux/cars/carsSlice';
import { selectFilter } from '../../redux/cars/carsSelectors';
import { priceOptions } from '../../shared/utils/utils';
import Button from '../Button/Button';
import { Controller, useForm } from 'react-hook-form';

const Filter = ({ cars }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isFormDisabled = pathname === '/favorites' && cars?.length === 0;

  const price = priceOptions(cars);
  const uniqueBrands = useUniquePropValues(cars, 'make');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    shouldDisable: isFormDisabled,
  });

  useEffect(() => {
    reset(filter);
  }, [filter, reset]);

  const onSubmit = (data) => {
    dispatch(setFilter(data));
  };

  const resetFilterInRedux = () => {
    dispatch(resetFilter());
    reset({
      brand: '',
      price: '',
      from: '',
      to: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${isFormDisabled ? 'pointer-events-none' : ''}`}
      disabled={isFormDisabled}
    >
      <div>
        <div>
          <div>
            <label htmlFor="brand">Car brand</label>
            <Controller
              name="brand"
              control={control}
              rules={{ required: true, message: 'Brand is required' }}
              render={({ field }) => (
                <>
                  <select {...field}>
                    <option value="">Enter the text</option>
                    {uniqueBrands &&
                      uniqueBrands.map((make, idx) => (
                        <option key={idx} value={make}>
                          {make}
                        </option>
                      ))}
                  </select>
                  {errors.brand && (
                    <p
                      className={`error ${
                        isFormDisabled ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {errors.brand.type === 'required'
                        ? 'Brand is required'
                        : errors.brand.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div>
            <label htmlFor="price">Price/ 1 hour</label>
            <div>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: true,
                  min: {
                    value: 0,
                    message: 'Must be 0 or greater',
                  },
                }}
                render={({ field }) => (
                  <>
                    <select {...field}>
                      <option value="">To $</option>
                      {price &&
                        price.map((price, index) => (
                          <option key={index} value={price}>
                            {price}
                          </option>
                        ))}
                    </select>
                    {errors.price && (
                      <p
                        className={`${
                          isFormDisabled ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        {errors.price.type === 'required'
                          ? 'Price is required'
                          : errors.price.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div>
            <label htmlFor="minMileage">Car mileage / km (from)</label>
            <div>
              <label className="relative">
                <input
                  type="number"
                  {...register('from', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Must be 0 or greater',
                    },
                  })}
                />
                <span>From</span>
              </label>
              <label>
                <input
                  type="number"
                  {...register('to', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Must be 0 or greater',
                    },
                    validate: (value, { from }) => {
                      if (parseInt(value) > parseInt(from)) {
                        return true;
                      }
                      return 'To must be greater than From';
                    },
                  })}
                />
                <span>To</span>
              </label>
              <p className={` ${isFormDisabled ? 'opacity-0' : 'opacity-100'}`}>
                {errors?.from && <span>{errors.from.message}</span>}
                {errors?.to && <span>{errors.to.message}</span>}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button type="submit" label="Search" />
          <Button type="button" onClick={resetFilterInRedux} label="Reset" />
        </div>
      </div>
    </form>
  );
};

export default Filter;
