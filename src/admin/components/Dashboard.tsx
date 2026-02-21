import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { AdminStats } from '../../types/admin.types';

interface DashboardProps {
    stats: AdminStats;
    recentActivity: any[];
}

const Dashboard: React.FC<DashboardProps> = ({ stats, recentActivity }) => {
    const dashboardRef = useRef<HTMLDivElement>(null);
    const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');

    useEffect(() => {
        if (dashboardRef.current) {
            const cards = dashboardRef.current.querySelectorAll('.stat-card');
            gsap.fromTo(
                cards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.2)'
                }
            );
        }
    }, []);

    const chartData = {
        week: [5, 8, 12, 7, 9, 11, 14],
        month: [45, 52, 48, 60, 55, 58, 62, 65, 70, 68, 72, 75],
        year: [120, 135, 150, 165, 180, 200, 220, 240, 260, 280, 300, 320]
    };

    return (
        <div ref={dashboardRef} className="dashboard">
            <div className="dashboard-header">
                <h1>Панель управления</h1>
                <div className="time-range-selector">
                    <button
                        className={timeRange === 'week' ? 'active' : ''}
                        onClick={() => setTimeRange('week')}
                    >
                        Неделя
                    </button>
                    <button
                        className={timeRange === 'month' ? 'active' : ''}
                        onClick={() => setTimeRange('month')}
                    >
                        Месяц
                    </button>
                    <button
                        className={timeRange === 'year' ? 'active' : ''}
                        onClick={() => setTimeRange('year')}
                    >
                        Год
                    </button>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon total">🖼️</div>
                    <div className="stat-content">
                        <h3>Всего работ</h3>
                        <p className="stat-number">{stats.totalWorks}</p>
                        <p className="stat-change positive">+12% за месяц</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon added">📈</div>
                    <div className="stat-content">
                        <h3>Добавлено за месяц</h3>
                        <p className="stat-number">{stats.worksAddedThisMonth}</p>
                        <p className="stat-change positive">+3 с прошлой недели</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon views">👁️</div>
                    <div className="stat-content">
                        <h3>Просмотры</h3>
                        <p className="stat-number">{stats.totalViews.toLocaleString()}</p>
                        <p className="stat-change positive">+24% за месяц</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon categories">🏷️</div>
                    <div className="stat-content">
                        <h3>Категорий</h3>
                        <p className="stat-number">{Object.keys(stats.worksByType).length}</p>
                        <p className="stat-change">Наиболее популярная: Веб</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-charts">
                <div className="chart-card">
                    <h3>Статистика по категориям</h3>
                    <div className="category-stats">
                        {Object.entries(stats.worksByType).map(([type, count]) => (
                            <div key={type} className="category-item">
                                <div className="category-label">
                                    <span className="category-color" style={{
                                        backgroundColor:
                                            type === 'web' ? '#3b82f6' :
                                                type === 'mobile' ? '#10b981' :
                                                    type === 'design' ? '#8b5cf6' :
                                                        type === 'branding' ? '#f59e0b' :
                                                            '#ec4899'
                                    }}></span>
                                    {type === 'web' ? 'Веб' :
                                        type === 'mobile' ? 'Мобильные' :
                                            type === 'design' ? 'Дизайн' :
                                                type === 'branding' ? 'Брендинг' :
                                                    'Иллюстрации'}
                                </div>
                                <div className="category-bar">
                                    <div
                                        className="bar-fill"
                                        style={{
                                            width: `${(count / stats.totalWorks) * 100}%`,
                                            backgroundColor:
                                                type === 'web' ? '#3b82f6' :
                                                    type === 'mobile' ? '#10b981' :
                                                        type === 'design' ? '#8b5cf6' :
                                                            type === 'branding' ? '#f59e0b' :
                                                                '#ec4899'
                                        }}
                                    ></div>
                                </div>
                                <span className="category-count">{count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="chart-card">
                    <h3>Активность добавления</h3>
                    <div className="activity-chart">
                        <div className="chart-bars">
                            {chartData[timeRange].map((value, index) => (
                                <div key={index} className="chart-bar">
                                    <div
                                        className="bar"
                                        style={{ height: `${(value / Math.max(...chartData[timeRange])) * 100}%` }}
                                    ></div>
                                    <span className="bar-label">
                                        {timeRange === 'week' ? ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][index] :
                                            timeRange === 'month' ? index + 1 :
                                                ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'][index]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="recent-activity">
                <h3>Последняя активность</h3>
                <div className="activity-list">
                    {recentActivity.map((activity, index) => (
                        <div key={index} className="activity-item">
                            <div className="activity-icon">
                                {activity.type === 'add' ? '➕' :
                                    activity.type === 'edit' ? '✏️' :
                                        activity.type === 'delete' ? '🗑️' : '👁️'}
                            </div>
                            <div className="activity-content">
                                <p>{activity.message}</p>
                                <span className="activity-time">{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="quick-actions">
                <h3>Быстрые действия</h3>
                <div className="actions-grid">
                    <button className="action-button">
                        <span className="action-icon">🖼️</span>
                        <span>Добавить работу</span>
                    </button>
                    <button className="action-button">
                        <span className="action-icon">🏷️</span>
                        <span>Управление категориями</span>
                    </button>
                    <button className="action-button">
                        <span className="action-icon">⚙️</span>
                        <span>Настройки галереи</span>
                    </button>
                    <button className="action-button">
                        <span className="action-icon">📊</span>
                        <span>Генерация отчета</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;