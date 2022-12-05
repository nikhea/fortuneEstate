<span className={style.inputDivider}>
<div className={style.inputWidth}>
  <h1 className={style.inputTitle}> bedrooms*</h1>
  <Input
    type="number"
    name="bedrooms"
    placeholder=" bedrooms*"
    inputFull
    isWhiteBg
    required
    rounded
    errors={errors}
    inputRef={register("bedrooms", { required: true })}
  />
  <p className={style.errors}>
    {errors.bedrooms?.message && <p>{errors.bedrooms?.message}</p>}
  </p>
</div>

<div className={style.inputWidth}>
  <h1 className={style.inputTitle}> bathrooms*</h1>
  <Input
    type="number"
    name="bathrooms"
    placeholder="bathrooms*"
    inputFull
    isWhiteBg
    required
    rounded
    errors={errors}
    inputRef={register("bathrooms", { required: true })}
  />
  <p className={style.errors}>
    {errors.bathrooms?.message && <p>{errors.bathrooms.message}</p>}
  </p>
</div>
</span>
<span className={style.inputDivider}>
<div className={style.inputWidth}>
  <h1 className={style.inputTitle}>square footage*</h1>
  <Input
    type="number"
    name="squareFootage"
    placeholder="squareFootage*"
    // inputHalf
    inputFull
    isWhiteBg
    required
    rounded
    errors={errors}
    inputRef={register("squareFootage", { required: true })}
  />
  <p className={style.errors}>
    {errors.squareFootage?.message && (
      <p>{errors.squareFootage?.message}</p>
    )}
  </p>
</div>
