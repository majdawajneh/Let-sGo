using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Repositories.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<T> GetById(int id);
        IQueryable<T> GetAll();
        Task<T> Insert(T entity);
        Task<T> InsertRange(List<T> entities);
        Task Update(T entity);
        Task Delete(T entity);
        Task DeleteRange(List<T> entities);
        Task<int> SaveChanges();
    }
}
