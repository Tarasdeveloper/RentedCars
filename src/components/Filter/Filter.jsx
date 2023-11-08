import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUniquePropValues } from '../../shared/hooks/usePropValues';
import { resetFilter, setFilter } from '../../redux/cars/carsSlice';
import { selectFilter } from '../../redux/cars/carsSelectors';
import { priceOptions } from '../../shared/utils/utils';
import { Controller, useForm } from 'react-hook-form';
import {
  BrandInput,
  BrandSelect,
  FilterWrap,
  FromInput,
  FromLabel,
  FromSpan,
  InputButtons,
  InputsList,
  PriceSelect,
  SearchBtnwrap,
  SearchButton,
  ToInput,
  ToLabel,
  ToSpan,
} from './Filter.styled';

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
    <FilterWrap onSubmit={handleSubmit(onSubmit)} disabled={isFormDisabled}>
      <InputButtons>
        <InputsList>
          <BrandInput>
            <label htmlFor="brand">Car brand</label>
            <Controller
              name="brand"
              control={control}
              rules={{ required: true, message: 'Brand is required' }}
              render={({ field }) => (
                <>
                  <BrandSelect {...field}>
                    <option value="">Enter the text</option>
                    {uniqueBrands &&
                      uniqueBrands.map((make, idx) => (
                        <option key={idx} value={make}>
                          {make}
                        </option>
                      ))}
                  </BrandSelect>
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
          </BrandInput>
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
                    <PriceSelect {...field}>
                      <option value="">To $</option>
                      {price &&
                        price.map((price, index) => (
                          <option key={index} value={price}>
                            {price}
                          </option>
                        ))}
                    </PriceSelect>
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
              <FromLabel>
                <FromInput
                  type="number"
                  {...register('from', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Must be 0 or greater',
                    },
                  })}
                />
                <FromSpan>From</FromSpan>
              </FromLabel>
              <ToLabel>
                <ToInput
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
                <ToSpan>To</ToSpan>
              </ToLabel>
              <p className={` ${isFormDisabled ? 'opacity-0' : 'opacity-100'}`}>
                {errors?.from && <span>{errors.from.message}</span>}
                {errors?.to && <span>{errors.to.message}</span>}
              </p>
            </div>
          </div>
        </InputsList>
        <SearchBtnwrap>
          <SearchButton type="submit" label="Search">
            Search
          </SearchButton>
          <SearchButton
            type="button"
            onClick={resetFilterInRedux}
            label="Reset"
          >
            Reset
          </SearchButton>
        </SearchBtnwrap>
      </InputButtons>
    </FilterWrap>
  );
};

export default Filter;
