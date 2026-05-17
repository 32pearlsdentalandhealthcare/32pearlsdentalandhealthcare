import dbConnect from '@/lib/db';
import Appointment from '@/models/Appointment';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    env: {
      hasUri: !!process.env.MONGODB_URI,
      uriStart: process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 35) + '...' : null,
    },
    mongoose: {
      readyState: mongoose.connection.readyState,
      connectionStateName: ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState],
    },
    testConnection: null,
    testQuery: null,
  };

  try {
    console.log('--- STARTING DYNAMIC BACKEND DIAGNOSTIC ---');
    await dbConnect();
    diagnostics.testConnection = {
      success: true,
      readyState: mongoose.connection.readyState,
      dbName: mongoose.connection.name,
    };

    try {
      const count = await Appointment.countDocuments();
      const recent = await Appointment.find({}).sort({ createdAt: -1 }).limit(1);
      diagnostics.testQuery = {
        success: true,
        count,
        hasAppointments: count > 0,
        mostRecent: recent.length > 0 ? {
          id: recent[0]._id,
          name: recent[0].name,
          service: recent[0].service,
          createdAt: recent[0].createdAt,
        } : null,
      };
    } catch (queryErr) {
      diagnostics.testQuery = {
        success: false,
        error: queryErr.message,
        stack: queryErr.stack,
      };
    }
  } catch (connErr) {
    diagnostics.testConnection = {
      success: false,
      error: connErr.message,
      stack: connErr.stack,
    };
  }

  return NextResponse.json({ success: true, diagnostics }, { status: 200 });
}
