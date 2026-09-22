using Application.Repositories.Interfaces;
using Infrastructure.Context;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private readonly TMS_DBContext _dbContext;

    public GenericRepository(TMS_DBContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<T> GetById(int id)
    {
        return await _dbContext.Set<T>().FindAsync(id);
    }

    public IQueryable<T> GetAll()
    {
        return _dbContext.Set<T>();
    }

    // تعديل نوع الإرجاع إلى T وتطبيق Return
    public async Task<T> Insert(T entity)
    {
        await _dbContext.Set<T>().AddAsync(entity);
        return entity;
    }

    public async Task<T> InsertRange(List<T> entities)
    {
        await _dbContext.Set<T>().AddRangeAsync(entities);
        return entities.FirstOrDefault(); // إرجاع أول كائن من المجموعة
    }
    // تعديل نوع الإرجاع إلى T وتطبيق Return
    public async Task Update(T entity)
    {
        _dbContext.Set<T>().Update(entity);
    }

    public async Task Delete(T entity)
    {
        
          _dbContext.Set<T>().Remove(entity);
        
    }

    public async Task DeleteRange(List<T> entities)
    {
        _dbContext.Set<T>().RemoveRange(entities);
    }

    // إضافة ميثود SaveChanges المفقودة
    public async Task<int> SaveChanges()
    {
        return await _dbContext.SaveChangesAsync();
    }
}